import Razorpay from "razorpay";
import crypto from "crypto";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";

const mongoPrisma = new MongoClient();

export const instance = new Razorpay({
  key_id: process.env.PAY_ID,
  key_secret: process.env.PAY_SECREAT,
});

// Create Razorpay Order
export const createOrder = async (req, res, next) => {
  console.log("hi");
  
  try {
    const { planId } = req.params;
    const vendorId = req.user.id;

    console.log(planId,vendorId);
    

    if (!planId) {
      throw new CustomError("Plan ID is required", 400, false);
    }

    const plan = await mongoPrisma.plan.findFirst({ where: { id: planId } });
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

    const order = await instance.orders.create(options);
    console.log(order);
    
    const subscription = await mongoPrisma.Subscription.create({
      data: {
        vendorId: vendorId,
        order_id:order.order_id,
        planId: planId,
        status: 'PENDING', // Subscription is pending until payment is successful
        start_date: new Date(),
        auto_renew: true, // Assuming auto-renew is true for this subscription
      },
    });

    await mongoPrisma.payment.create({
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
      subscription
    });
  } catch (error) {
    next(error);
  }
};

// Verify Payment
export const verifyPayment = async (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  try {
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.PAY_SECREAT)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      const existingPayment = await mongoPrisma.Payment.findFirst({
        where: { razorpay_payment_id },
      });

      if (existingPayment) {
        return res
          .status(400)
          .json({ success: false, message: "Payment already verified!" });
      }

      // await  mongoPrisma.Payment.create({
       
        
      // });




    } else {
      res.status(400).json({ success: false, message: "Invalid signature!" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    next(error);
  }
};
