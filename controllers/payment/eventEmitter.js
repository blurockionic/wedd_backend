import { EventEmitter } from "events";
import generateInvoice from "./invoice.js";

const eventEmitter = new EventEmitter();

// Background Invoice Generation Listener
eventEmitter.on("invoice.generate", async ({ paymentId }) => {
  try {
    const invoiceData = await generateInvoice({ paymentId});
    console.log(`Invoice generated: ${invoiceData?.html || invoiceData}`);
  } catch (error) {
    console.error(" Error generating invoice:", error);
  }
});

// Route for Frontend Invoice Generation
export const generateBill = async (req, res) => {
  try {
    const { paymentId } = req.params;

    // Generate invoice and return HTML response to the frontend
    const invoiceData = await generateInvoice({ paymentId, returnHtml: true });
    if (!invoiceData) {
      return res.status(404).json({ message: "Invoice generation failed" });
    }

    res.send(invoiceData.html || invoiceData);
  } catch (error) {
    console.error(" Error generating invoice:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default eventEmitter;
