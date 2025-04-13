import Razorpay from "razorpay";
import crypto from "crypto";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";

import { parseDuration } from "../../helper/helper.js";
import logger from "../../config/logger.js";
import eventEmitter from "./eventEmitter.js";
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
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    const plan = await mongoPrisma.Plan.findFirst({ where: { id: planId } });
    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
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

    const order = await instance.orders.create(options);
    if (!order) {
      return res.status(500).json({
        success: false,
        message: "Failed to create order with Razorpay",
      });
    }
    const latestSubscription = await mongoPrisma.Subscription.findFirst({
      where: { vendorId: vendorId },
      orderBy: { end_date: "desc" },
    });

    let startDate = new Date();
    let endDate = new Date();

    if (
      latestSubscription?.end_date &&
      latestSubscription.end_date > new Date()
    ) {
      startDate = new Date(latestSubscription.end_date);
    }

    // Set endDate initially to startDate
    endDate = new Date(startDate);

    // Extract years and months from the plan duration
    const totalMonths = parseDuration(plan.duration);
    const yearsToAdd = Math.floor(totalMonths / 12);
    const monthsToAdd = totalMonths % 12;

    // Add years and months to endDate
    endDate.setFullYear(endDate.getFullYear() + yearsToAdd);
    endDate.setMonth(endDate.getMonth() + monthsToAdd);

    const isTrial = latestSubscription == null && plan.trial_period;
    const trialEndDate = isTrial
      ? new Date(Date.now() + plan.trial_period * 24 * 60 * 60 * 1000)
      : null;

    const subscription = await mongoPrisma.Subscription.create({
      data: {
        vendorId: vendorId,
        order_id: order.id,
        planId: planId,
        status: "PENDING",
        start_date: startDate,
        end_date: endDate,
        trial_end_date: trialEndDate,
        is_trial: !!isTrial,
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
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the order",
      error: error.message,
    });
  }
};

// Verify Payment
export const verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.PAY_SECRET)
      .update(body)
      .digest("hex");

    if (
      !crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(razorpay_signature)
      )
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid signature!" });
    }

    const subscription = await mongoPrisma.Subscription.findFirst({
      where: { order_id: razorpay_order_id },
    });
    if (!subscription) {
      console.error("Subscription not found for order_id:", razorpay_order_id);
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }

    const payment = await mongoPrisma.Payment.findFirst({
      where: { subscriptionId: subscription.id },
    });
    if (!payment) {
      console.error(
        "Payment record not found for subscription:",
        subscription.id
      );
      return res.status(404).json({
        success: false,
        message: "Payment record not found",
      });
    }

    const razorpayPayment = await instance.payments.fetch(razorpay_payment_id);
    if (!razorpayPayment) {
      console.error(
        "Payment details not found in Razorpay:",
        razorpay_payment_id
      );
      return res.status(404).json({
        success: false,
        message: "Payment details not found in Razorpay",
      });
    }

    if (razorpayPayment.status !== "captured") {
      logger.warn("Payment not captured in Razorpay:", {
        paymentId: razorpay_payment_id,
        status: razorpayPayment.status,
      });
      return res.status(400).json({
        success: false,
        message: `Payment not yet captured. Status: ${razorpayPayment.status}`,
      });
    }

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
      autoRenew: subscription.auto_renew,
    };

    const updatedSubData = {
      status: "ACTIVE",
      payment_id: razorpay_payment_id,
    };

    const [savedPayment, savedSubscription] = await mongoPrisma.$transaction([
      mongoPrisma.Payment.update({
        where: { id: payment.id },
        data: updatedPaymentData,
      }),
      mongoPrisma.Subscription.update({
        where: { id: subscription.id },
        data: updatedSubData,
      }),
    ]);

    const data = {
      savedPayment,
      savedSubscription,
    };

    eventEmitter.emit("invoice.generate", { paymentId: payment.id });

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
      where: { vendorId, status: "SUCCESS" },
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
};

// Get Subscription
export const getSubscription = async (req, res, next) => {
  try {
    const vendorId = req?.user?.id;

    const subscriptions = await mongoPrisma.Subscription.findMany({
      where: { vendorId, status: "ACTIVE" },
      orderBy: { start_date: "desc" },
      include: { plan: true },
    });

    res.status(200).json({
      success: true,
      message: "Subscriptions fetched successfully",
      subscriptions: subscriptions || [],
    });
  } catch (error) {
    next(error);
  }
};
