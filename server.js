import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleware/error.middleware.js";
import prismaServiceMongo from "./config/prisma.mongo.service.js";
import prismaService from "./config/prisma.postgre.service.js";
import cluster from "cluster";
import os from "os";
import routes from "./routes/routes.js";
import morganLogger from "./middleware/log.middleware.js";
import mongoose from "mongoose";
import uploadRouter from "./routes/upload.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const numCPUs = os.cpus().length;

import guestRoutes from "./routes/guestRoutes.js";
import templateRoutes from "./routes/templateRoutes.js";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  // allow all requests
  origin: process.env.BASE_URL,
  credentials: true,
};

app.use(cors(corsOption));

app.use(morganLogger);

app.use("/api/guests", guestRoutes);
app.use(templateRoutes);

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).send({ status: "Healthy" });
});

if (cluster.isPrimary) {
  console.log(`Primary process PID: ${process.pid}`);

  // Fork workers based on the number of CPUs
  for (let i = 0; i < 2; i++) {
    cluster.fork();
  }

  // Restart a worker if it crashes
  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} exited. Restarting a new worker...`
    );
    cluster.fork();
  });
} else {
  // Each worker connects to the databases independently
  (async () => {
    try {
      await prismaService.connect();
      await prismaServiceMongo.connect();
      await mongoose.connect(process.env.MONGO_DB_DATABASE_URL);
      console.log(`Worker ${process.pid} connected to databases`);
    } catch (error) {
      console.error(
        `Worker ${process.pid} failed to connect to databases`,
        error
      );
      process.exit(1);
    }
  })();

  //file uploader
  app.use("/api/v1", uploadRouter);

  // Define routes
  app.use("/api/v1", routes);

  app.post("/orders", async (req, res) => {
    const razorpay = new Razorpay({
      key_id: "rzp_test_vZpYWmGXUMEQ7W",
      key_secret: "PZLnzm3sZxWQmFhujjloS4lN",
    });

    const options = {
      amount: req.body.amount, // amount in paise (1 INR = 100 paise)
      currency: req.body.currency || "INR", // default INR currency
      receipt: `receipt#${Date.now()}`,
      payment_capture: 1, // auto-capture payment
    };

    try {
      const response = await razorpay.orders.create(options);
      res.json({
        order_id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  });

  // Payment Confirmation
  app.get("/payment/:paymentId", async (req, res) => {
    const { paymentId } = req.params;

    const razorpay = new Razorpay({
      key_id: "rzp_test_vZpYWmGXUMEQ7W",
      key_secret: "PZLnzm3sZxWQmFhujjloS4lN",
    });

    try {
      const payment = await razorpay.payments.fetch(paymentId);

      if (!payment) {
        return res.status(500).json("Error at Razorpay loading");
      }

      res.json({
        status: payment.status,
        method: payment.method,
        amount: payment.amount,
        currency: payment.currency,
      });
    } catch (error) {
      res.status(500).json("Failed to fetch payment details");
    }
  });
  // Error handling middleware
  app.use(errorMiddleware);

  // Start server on each worker
  app.listen(PORT, () => {
    console.log(
      `Worker ${process.pid} is listening on http://localhost:${PORT}`
    );
  });

  // Graceful shutdown
  process.on("SIGINT", async () => {
    console.log(`Worker ${process.pid} is shutting down gracefully`);
    try {
      await prismaService.disconnect();
      await prismaServiceMongo.disconnect();
      console.log(`Worker ${process.pid} disconnected from databases`);
    } catch (error) {
      console.error(
        `Error during disconnection in worker ${process.pid}`,
        error
      );
    }
    process.exit(0);
  });
}
