import { instance } from "./payment/payment.js";
import { PrismaClient as PostgresClient } from "../prisma/generated/postgres/index.js";



const prisma = new PostgresClient();

export const createPayment = async (req, res) => {
  try {
    const { currency = "INR" } = req.body;
    const  templateId = req.params.cardId;
    const  userId  = req.user.id;

    const template = await prisma.InvitationTemplate.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      return res
        .status(404)
        .json({ success: false, message: "Template not found" });
    }

    const amount = parseFloat(template.price);

    const order = await instance.orders.create({
      amount: amount * 100,
      currency,
      receipt: `receipt_${Date.now()}`,
      notes: { templateId, userId },
    });

    if (!order) {
      return res
        .status(500)
        .json({ success: false, message: "Payment creation failed" });
    }

    console.log("Order created:", order);
    console.log("Order ID:",userId);

    // Store order details in DB
    const savedOrder = await prisma.OrderDetails.create({
        data: {
            orderId: order.id,
            userId,
            templateId,
            amount,
            currency,
            razorpayResponse: { ...order},
            status:order.status
        },
    });

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
      const { orderId, paymentId, signature } = req.body;
  
  
      // Generate expected signature
      const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(orderId + "|" + paymentId)
        .digest("hex");
  
      if (generatedSignature !== signature) {
        return res.status(400).json({ success: false, message: "Invalid payment signature" });
      }

      const razorpayRes=  await instance.payments.fetch(paymentId)

      await prisma.OrderDetails.update({
        where: { orderId },
        data: { status: "paid" },
      });
  
     
      const payment = await prisma.PaymentDetails.create({
        data: {
          orderId,
          paymentId,
          razorpayResponse: razorpayRes,
          status: "success",
          purchasedAt: new Date(),
          userId:razorpayRes.notes.userId,
          templateId:razorpayRes.notes.templateId,  
        },
      });
  
      res.json({ success: true, payment });
    } catch (error) {
      console.error("Payment verification failed:", error);
      res.status(500).json({ success: false, message: "Payment verification failed" });
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