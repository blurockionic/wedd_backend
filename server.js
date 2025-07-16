import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleware/error.middleware.js";
import prismaServiceMongo from "./config/prisma.mongo.service.js";
import prismaService from "./config/prisma.postgre.service.js";
import cluster from "cluster";
import os from "os";

import routes from "./routes/routes.js";
import uploadRouter from "./routes/upload.router.js";
import morganLogger from "./middleware/log.middleware.js";
import startInvoiceCron from "./utils/cronJob.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const numCPUs = os.cpus().length;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: [
    process.env.BASE_URL,
    "https://marriagevendors-production.up.railway.app",
  ],
  credentials: true,
};

app.use(cors(corsOption));
app.use(morganLogger);

// Health check route
app.get("/health", (_, res) => res.status(200).send({ status: "Healthy" }));

startInvoiceCron();

// ============================
// 🧠 CLUSTER SETUP
// ============================
if (cluster.isPrimary) {
  console.log(`🧠 Primary process PID: ${process.pid}`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Optional: restart crashed workers
  cluster.on("exit", (worker) => {
    console.log(`⚠️ Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  (async () => {
    try {
      await prismaService.connect();
      await prismaServiceMongo.connect();
      console.log(`✅ Worker ${process.pid} connected to databases`);
    } catch (err) {
      console.error(`❌ Worker ${process.pid} DB connection error:`, err);
      process.exit(1);
    }
  })();



  // Mount routes
  app.use("/api/v1", uploadRouter);
  app.use("/api/v1", routes);
  app.use(errorMiddleware);

  // Start server
  app.listen(PORT, () => {
    console.log(`🚀 Worker ${process.pid} listening at http://localhost:${PORT}`);
  });

  // Graceful shutdown
  process.on("SIGINT", async () => {
    console.log(`🧼 Worker ${process.pid} shutting down...`);
    try {
      await prismaService.disconnect();
      await prismaServiceMongo.disconnect();
      process.exit(0);
    } catch (err) {
      console.error("Shutdown error:", err);
      process.exit(1);
    }
  });
}
