import Razorpay from "razorpay";
import crypto from "crypto";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";

const mongoPrisma = new MongoClient();

export const instance = new Razorpay({
  key_id: process.env.PAY_ID,
  key_secret: process.env.PAY_SECRET,
});

// Create Razorpay Order
export const createOrder = async (req, res, next) => {
  try {
    const { planId } = req.params;
    const vendorId = req.user.id;

    

    if (!planId) {
      throw new CustomError("Plan ID is required", 400, false);
    }

    const plan = await mongoPrisma.Plan.findFirst({ where: { id: planId } });
    if (!plan) {
      throw new CustomError("Plan not found", 404, false);
    }




    const amount = plan.price * 100;

    const options = {
      amount: amount,
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
      notes: {
        vendorId: vendorId,
        planId: planId,
      },
    };

    console.log(instance);

    

    const order = await instance.orders.create(options);
    console.log(order);
    const subscription = await mongoPrisma.Subscription.create({
      data: {
        vendorId: vendorId,
        order_id: order.id,
        planId: planId,
        status: "PENDING", 
        start_date: new Date(),
        auto_renew: true, 
      },
    });

    await mongoPrisma.Payment.create({
      data: {
        vendorId: vendorId,
        subscriptionId: subscription.id,
        amount: plan.price,
        currency: "INR",
        status: "PENDING",
      },
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
      subscription,
    });
  } catch (error) {
    next(error);
  }
};

// Verify Payment
export const verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Validate inputs
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, message: "Missing required fields!" });
    }

    // Generate expected signature
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.PAY_SECRET)
      .update(body)
      .digest("hex");

    if (!crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(razorpay_signature))) {
      return res.status(400).json({ success: false, message: "Invalid signature!" });
    }

    // Fetch Subscription
    const subscription = await mongoPrisma.Subscription.findFirst({
      where: { order_id: razorpay_order_id },
    });

    if (!subscription) {
      console.error("Subscription not found for order_id:", razorpay_order_id);
      throw new CustomError("Subscription not found", 404);
    }

    // Fetch Payment
    const payment = await mongoPrisma.Payment.findFirst({
      where: { subscriptionId: subscription.id },
    });

    if (!payment) {
      console.error("Payment record not found for subscription:", subscription.id);
      throw new CustomError("Payment record not found", 404);
    }

    // Fetch payment details from Razorpay
    const razorpayPayment = await instance.payments.fetch(razorpay_payment_id);
    if (!razorpayPayment) {
      console.error("Payment details not found in Razorpay:", razorpay_payment_id);
      throw new CustomError("Payment details not found in Razorpay", 404);
    }

    // Prepare updated payment data
    const updatedPaymentData = {
      status: razorpayPayment.status === "captured" ? "SUCCESS" : "FAILED",
      razorpay_payment_id,
      razorpay_order_id,
      amount: razorpayPayment.amount / 100, // Convert to currency unit (e.g., INR)
      currency: razorpayPayment.currency,
      payment_method: razorpayPayment.method,
      vpa: razorpayPayment.vpa,
      email: razorpayPayment.email,
      contact: razorpayPayment.contact,
      fee: razorpayPayment.fee ? razorpayPayment.fee / 100 : null,
      tax: razorpayPayment.tax ? razorpayPayment.tax / 100 : null,
      rrn: razorpayPayment.acquirer_data?.rrn,
      upi_transaction_id: razorpayPayment.acquirer_data?.upi_transaction_id,
      acquirer_data: razorpayPayment.acquirer_data,
      notes: razorpayPayment.notes,
      updated_at: new Date(),
    };

    // Use a transaction to update both Payment & Subscription atomically
    await mongoPrisma.$transaction([
      mongoPrisma.Payment.update({
        where: { id: payment.id },
        data: updatedPaymentData,
      }),
      mongoPrisma.Subscription.update({
        where: { id: subscription.id },
        data: { status: "ACTIVE" },
      }),
    ]);

    res.status(200).json({
      success: true,
      message: "Payment verified and subscription activated!",
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    next(error);
  }
};


// Get Payment History

export const getPaymentHistory = async (req, res, next) => {
  try {
    const vendorId = req.user.id;

    const payments = await mongoPrisma.Payment.findMany({
      where: { vendorId },
      orderBy: { created_at: "desc" },
      include: { subscription: true },
    });

    res.status(200).json({
      success: true,
      message: "Payment history fetched successfully",
      payments,
    });
  } catch (error) {
    next(error);
  }
}
export const getSubscription = async (req, res, next) => {
  try {
    const vendorId = req.user.id;

    const subscriptions = await mongoPrisma.Subscription.findMany({
      where: { vendorId },
      orderBy: { start_date: "desc" },
      include: { plan: true },
    });

    res.status(200).json({
      success: true,
      message: "Subscriptions fetched successfully",
      subscriptions,
    });
  } catch (error) {
    next(error);
  }
}