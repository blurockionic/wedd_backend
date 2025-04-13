import { log } from "console";
import { PrismaClient as PostgresClient } from "../prisma/generated/postgres/index.js";
import { instance } from "./payment/payment.js";
const prisma = new PostgresClient();

import crypto from "crypto";

export const templatePaymentStatus = async (req, res) => {
  try {
    const { templateId } = req.params;
    const { id: userId } = req.user;

    if (!templateId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Invalid request parameters",
        paymentStatus: "unpaid",
        paymentDetail: null,
      });
    }

    const payment = await prisma.PaymentDetails.findFirst({
      where: {
        templateId,
        userId,
        paymentStatus: "successful",
      },
      orderBy: {
        purchasedAt: "desc",
      },
    });

    const isPaid = payment && payment.paymentStatus === "successful";
    return res.status(200).json({
      success: true,
      message: isPaid ? "Payment found" : "No successful payment found",
      paymentStatus: isPaid ? "paid" : "unpaid",
      paymentDetail: payment || null,
    });
  } catch (error) {
    console.error("Error fetching payment status:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      paymentStatus: "unpaid",
      paymentDetail: null,
    });
  }
};

export const createPayment = async (req, res) => {
  try {
    const { currency = "INR" } = req.body;
    const templateId = req.params.cardId;
    const { id: userId, user_name, email } = req.user;

    if (!templateId || !userId) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid request parameters" });
    }

    // Fetch template details inside a transaction
    const [template] = await prisma.$transaction([
      prisma.invitationTemplate.findUnique({
        where: { id: templateId },
      }),
    ]);

    if (!template) {
      return res
        .status(404)
        .json({ success: false, message: "Template not found" });
    }

    const amount = parseFloat(template.price);
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid price" });
    }

    // Create order in Razorpay
    const order = await instance.orders.create({
      amount: amount * 100, // Convert to paise
      currency,
      receipt: `receipt_${Date.now()}`,
      notes: { templateId, userId, user_name, email },
    });

    if (!order) {
      return res
        .status(500)
        .json({ success: false, message: "Payment creation failed" });
    }

    // Store order details in DB within a transaction
    const [savedOrder] = await prisma.$transaction([
      prisma.paymentDetails.create({
        data: {
          orderId: order.id,
          userId,
          templateId,
          amount,
          currency,
          razorpayResponse: {
            id: order.id,
            amount: order.amount,
            currency: order.currency,
            status: order.status,
          },
          orderStatus: "pending",
          paymentStatus: "initiated",
        },
      }),
    ]);

    res.json({ success: true, order: savedOrder });
  } catch (error) {
    console.error("Error creating payment:", error);
    res
      .status(500)
      .json({ success: false, message: "Payment creation failed" });
  }
};
export const verifyPayment = async (req, res) => {
  try {
    const { order_id, payment_id, razorpay_signature } = req.body;

    // 🔹 Generate expected signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.PAY_SECRET)
      .update(order_id + "|" + payment_id)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid payment signature" });
    }

    // 🔹 Fetch Razorpay Payment Details (if paymentId exists)
    let razorpayRes = null;
    if (payment_id) {
      razorpayRes = await instance.payments.fetch(payment_id);
    }

    console.log("Razorpay Response:", razorpayRes);

    try {
      const [updatedPayment] = await prisma.$transaction([
        prisma.PaymentDetails.update({
          where: { orderId: order_id },
          data: {
            paymentId: payment_id,
            razorpayResponse: razorpayRes || {},
            paymentStatus: "successful",
            orderStatus: "completed",
            purchasedAt: new Date(),
            userId: razorpayRes?.notes?.userId || null,
            templateId: razorpayRes?.notes?.templateId || null,
          },
        }),
      ]);

      res.json({ success: true, payment: updatedPayment });
    } catch (dbError) {
      return res.status(500).json({
        success: false,
        message: "Database update failed",
        error: dbError.message,
      });
    }

    res.json({ success: true, payment: updatedPayment });
  } catch (error) {
    console.error("Payment verification failed:", error);
    res.status(500).json({
      success: false,
      message: "Payment verification failed",
    });
  }
};

//   export const razorpayWebhook = async (req, res) => {
//     try {
//       const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
//       const razorpaySignature = req.headers["x-razorpay-signature"];
//       const body = JSON.stringify(req.body);

//       // Generate expected signature
//       const expectedSignature = crypto
//         .createHmac("sha256", webhookSecret)
//         .update(body)
//         .digest("hex");

//       if (expectedSignature !== razorpaySignature) {
//         return res.status(400).json({ success: false, message: "Invalid webhook signature" });
//       }

//       // Extract event details
//       const event = req.body.event;
//       const payload = req.body.payload.payment.entity;

//       if (event === "payment.captured") {
//         const { order_id, id: paymentId, status, created_at } = payload;

//         // Fetch order details
//         const order = await prisma.OrderDetails.findUnique({
//           where: { orderId: order_id },
//         });

//         if (!order) {
//           return res.status(404).json({ success: false, message: "Order not found" });
//         }

//         // Update order status to paid
//         await prisma.OrderDetails.update({
//           where: { orderId: order_id },
//           data: { status: "paid" },
//         });

//         // Store payment details
//         await prisma.paymentDetails.create({
//           data: {
//             orderId: order_id,
//             paymentId,
//             razorpayResponse: req.body.payload.payment, // Store full Razorpay response
//             status,
//             purchasedAt: new Date(created_at * 1000), // Convert UNIX timestamp to Date
//             userId: order.userId,  // Assuming `OrderDetails` has a `userId`
//             templateId: order.templateId, // Assuming it has a `templateId`
//           },
//         });

//         return res.json({ success: true, message: "Payment verified and updated" });
//       }

//       return res.status(200).json({ success: true, message: "Webhook received but no action taken" });
//     } catch (error) {
//       console.error("Webhook processing failed:", error);
//       return res.status(500).json({ success: false, message: "Internal server error" });
//     }
//   };
