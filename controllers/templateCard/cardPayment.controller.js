import { instance } from "../payment/payment.js";

export const createOrder = async (req, res) => {
  try {
    const { amount, currency = "INR" } = req.body;
    if (!amount) return res.status(400).json({ error: "Amount is required" });

    const options = {
      amount: amount * 100,
      currency,
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await instance.orders.create(options);
    res.status(201).json({
      order_id: order.id,
      currency: order.currency,
      amount: order.amount / 100,
    });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

// Fetch Payment Details
export const getPaymentDetails = async (req, res) => {
  try {
    const { paymentId } = req.params;

    const payment = await instance.payments.fetch(paymentId);
    if (!payment) return res.status(404).json({ error: "Payment not found" });

    res.json({
      status: payment.status,
      method: payment.method,
      amount: payment.amount / 100, // Convert to INR
      currency: payment.currency,
    });
  } catch (error) {
    console.error("Payment fetch error:", error);
    res.status(500).json({ error: "Failed to fetch payment details" });
  }
};
