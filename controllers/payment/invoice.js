import PuppeteerHTMLPDF from "puppeteer-html-pdf";
import fs from "fs/promises";
import path from "path";
import handlebars from "handlebars";
import { fileURLToPath } from "url";
import sendEmail from "../../service/emailService.js";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import {
  calculateInvoiceDetails,
  calculateNextBillingDate,
  formatDate,
  generateInvoiceNumber,
} from "../../helper/helper.js";

const mongoPrisma = new MongoClient();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Register Handlebars Helper
handlebars.registerHelper("formatDate", (date) =>
  new Date(date).toLocaleDateString()
);

const htmlPDF = new PuppeteerHTMLPDF();

const generateInvoice = async ({ paymentId = null, returnHtml = false }) => {
  try {
    let payments;

    if (paymentId) {
      // Fetch specific payment details (On-demand for frontend)
      payments = await mongoPrisma.Payment.findMany({
        where: { id: paymentId },
      });
    } else {
      const [pendingPayments] = await Promise.all([
        mongoPrisma.Payment.findMany({
          where: { status: "SUCCESS", bill_generated: false },
          orderBy: { created_at: "desc" },
        }),
      ]);

      payments = [...pendingPayments];
    }

    if (!payments.length)
      return returnHtml
        ? { html: "", message: "No invoice found." }
        : "No invoices to generate.";

    await htmlPDF.initializeBrowser();
    htmlPDF.setOptions({ format: "A4", printBackground: true });

    for (const savedPayment of payments) {
      const { vendorId } = savedPayment;
      const planId = savedPayment?.notes?.planId;

      const [planData, vendorData, savedSubscription] = await Promise.all([
        mongoPrisma.Plan.findFirst({ where: { id: planId } }),
        mongoPrisma.Vendor.findFirst({ where: { id: vendorId } }),
        mongoPrisma.Subscription.findFirst({ where: { vendorId, planId } }),
      ]);

      if (!planData || !vendorData || !savedSubscription) continue;

      const templatePath = path.join(
        __dirname,
        "../../constant/invoiceTemplate.hbs"
      );
      await fs.access(templatePath);

      const htmlTemplate = await fs.readFile(templatePath, "utf8");
      const template = handlebars.compile(htmlTemplate);
      const invoiceNumber = generateInvoiceNumber();

      const invoiceInsight = {
        discount: 0,
        igstRate: 0,
        amount: planData.price,
        paidAmount: savedPayment.amount,
      };

      const {
        discount,
        totalExclIGST,
        igstAmount,
        igstTotal,
        totalAmount,
        amountDue,
      } = calculateInvoiceDetails({ ...invoiceInsight });

      const invoiceData = {
        customer: {
          name: vendorData.name,
          email: vendorData.email || "sainkee1997@gmail.com",
          contact: savedPayment.contact || "N/A",
          city: vendorData.city,
          state: vendorData.state,
          country: vendorData?.country || "India",
        },
        subscription: {
          plan: planData.name || "Basic Plan",
          startDate: formatDate(savedSubscription.start_date),
          endDate: formatDate(savedSubscription.end_date),
        },
        payment: {
          amount: savedPayment.amount,
          currency: "₹",
          method: savedPayment.payment_method || "Unknown",
          status: savedPayment.status || "PENDING",
        },
        cal: {
          discount,
          totalExclIGST,
          igstAmount,
          igstTotal,
          totalAmount,
          amountDue,
        },
        invoice: {
          number: invoiceNumber,
          date: new Date().toISOString().split("T")[0],
          nextBillingDate: calculateNextBillingDate(
            savedSubscription.start_date,
            savedSubscription.end_date
          ),
        },
      };


      await mongoPrisma.Invoice.create({
        data: {
          invoiceNumber,
          vendorId,
          paymentId: savedPayment.id,
          nextBillingDate: new Date(
            invoiceData.invoice.nextBillingDate
          ).toISOString(),
          discount,
          totalExclIGST,
          igstAmount,
          igstTotal,
          totalAmount,
          amountDue,
        },
      });

      const content = template(invoiceData);

      if (returnHtml)
        return { html: content, message: "Invoice generated successfully." };

      // ✅ Otherwise, continue PDF generation and email process
      const pdfBuffer = await htmlPDF.create(content, { encoding: "buffer" });
      if (!pdfBuffer) continue;

      const emailContent = {
        subject: "Your Invoice",
        text: "Please find your invoice attached.",
        html: "<p>Please find your invoice attached.</p>",
        attachments: [
          {
            filename: "invoice.pdf",
            content: pdfBuffer,
            contentType: "application/pdf",
          },
        ],
      };

      await sendEmail(invoiceData.customer.email, emailContent);

      await mongoPrisma.Payment.update({
        where: { id: savedPayment.id },
        data: { bill_generated: true },
      });
    }

    return "Invoices generated and sent successfully.";
  } catch (error) {
    console.error("❌ Error generating invoice:", error);
    return null;
  }
};

export default generateInvoice;
