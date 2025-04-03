// cronJobs.js
import cron from "node-cron";
import generateInvoice from "../controllers/payment/invoice.js";

let isRunning = false;
let isCronScheduled = false; // Prevent multiple schedules

function startInvoiceCron() {
  if (isCronScheduled) return; // If already scheduled, exit
  isCronScheduled = true;

  cron.schedule("*/10 * * * *", async () => {
    if (isRunning) return;

    isRunning = true;
    try {
      await generateInvoice({});
    } catch (error) {
      console.error("Error in cron job:", error);
    }
    isRunning = false;
  });

  console.log("Invoice cron job scheduled.");
}

export default startInvoiceCron;
