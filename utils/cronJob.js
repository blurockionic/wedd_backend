import cron from "node-cron";
import generateInvoice from "../controllers/payment/invoice.js";

// Flag to prevent duplicate execution
let isRunning = false;

cron.schedule("*/10 * * * *", async () => {
  if (isRunning) {
    console.log("⚠️ Skipping duplicate cron execution...");
    return;
  }


  isRunning = true; // Lock execution

  try {
    await generateInvoice({});
  } catch (error) {
    console.error("❌ Error running cron job:", error);
  }

  isRunning = false;
});

console.log(" Cron job scheduled: Running every 10 minute...");
