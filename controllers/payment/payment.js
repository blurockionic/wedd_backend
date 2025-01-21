import Razorpay from "razorpay";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";

const mongoPrisma = new MongoClient();

export const instance = new Razorpay({
  key_id: process.env.PAY_ID,
  key_secret: process.env.PAY_SECREAT,
});

console.log(process.env.PAY_SECREAT);


export const createOrder = async (req, res, next) => {
  try {
    const { planId } = req.body;

    // Check if planId is provided
    if (!planId) {
      throw new CustomError("Plan ID is required", 400, false);
    }

    // Fetch the plan details
    const plan = await mongoPrisma.plan.findFirst({
      where: { id: planId },
    });

    console.log(plan);
    

    if (!plan) {
      throw new CustomError("Plan not found", 404, false);
    }

    const amount = plan.price * 100; 

    // Create order options
    const options = {
      amount: amount, // Amount in subunits
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    };

    // Create the Razorpay order
    const order = await instance.orders.create(options);

    // Send the response back to the client
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    next(error); // Pass errors to the global error handler
  }
};
