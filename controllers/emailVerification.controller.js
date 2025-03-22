import jwt from "jsonwebtoken";
import { PrismaClient as PostgresPrismaClient } from "../prisma/generated/postgres/index.js";
import { PrismaClient as MongoPrismaClient } from "../prisma/generated/mongo/index.js";
import CustomError from "../utils/CustomError.js";
import { parseDuration } from "../helper/helper.js";

const postgresPrisma = new PostgresPrismaClient();
const mongoPrisma = new MongoPrismaClient();

const verifyEmail = async (req, res, next) => {
  try {
    // Extract token and entity type from query params
    const { token, entityType } = req.query;
    
    const entityLower = entityType.toLowerCase();
    
    // // Verify the token
    const decoded = jwt.verify(token, process.env.EMAIL_TOKEN_SECRET);

    // // Determine the correct database and model
    const prismaClient = entityLower === "user" ? postgresPrisma : mongoPrisma;
    const modelName = entityLower === "user" ? "User" : "Vendor";

    // Find the entity in the database using a specific field (e.g., email)
    const entity = await prismaClient[modelName].findUnique({
      where: { email: decoded.email }, // Use the concrete field name (e.g., email)
    });

    if (!entity) {
      return res
        .status(400)
        .json({ message: `${entityLower} not found or invalid token.` });
    }

    // Check if already verified
    if (entity.is_verified) {
      return res
        .status(200)
        .json({ message: `${entityLower} email is already verified.` });
    }

    // Update verification status
    await prismaClient[modelName].update({
      where: { email: decoded.email }, // Use the same field name
      data: { is_verified: true },
    });

    if (entityLower === "vendor") {
      await activateTrialSubscription(entity.id);
    }

    res
      .status(200)
      .send(`
        <html>
          <head><title>Email Verification</title></head>
          <body style="text-align: center;">
            <h2>Email Verified Successfully</h2>
            <p>Your email has been verified.</p>
          </body>
        </html>
      `);
  } catch (error) {
    console.error("Error during email verification:", error.message);
    return next(new CustomError(`Verification failed: ${error.message}`, 400));
  }
};

const activateTrialSubscription = async (vendorId) => {
  const existingTrial = await mongoPrisma.Subscription.findFirst({
    where: {
      vendorId,
      is_trial: true,
      status: "ACTIVE",
    },
  });

  if (existingTrial) {
    console.log("Trial already exists for vendor:", vendorId);
    return;
  }

  const trialPlan = await mongoPrisma.Plan.findFirst({
    where: { price: 0, trial_period: { not: null } },
  });

  if (!trialPlan) {
    console.log("No free trial plan found.");
    return;
  }

  let startDate = new Date(); // Current date
  let trialEndDate = new Date(startDate); // Clone startDate
  trialEndDate.setMonth(
    trialEndDate.getMonth() + parseDuration(trialPlan.duration)
  ); // Add months

  const subscription = await mongoPrisma.Subscription.create({
    data: {
      vendorId,
      planId: trialPlan.id,
      status: "ACTIVE",
      start_date: startDate,
      end_date: trialEndDate,
      trial_end_date: trialEndDate,
      auto_renew: false,
      is_trial: true,
      order_id: `TRIAL-${vendorId}`,
    },
  });



  console.log("Trial subscription activated for vendor:",trialEndDate);
};

export default verifyEmail;
