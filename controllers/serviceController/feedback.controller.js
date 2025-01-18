import z from "zod";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();
const mongoPrisma = new MongoClient();

const validateFeedback = z.object({
  comment: z.string().transform((str) => str.trim().toLowerCase()),
  rating: z.number().min(1).max(5),
});

const feedback = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const userId = req.user.id; // Authenticated user ID
    const { rating, comment } = validateFeedback.parse(req.body);

    const { user_name } = await postgresPrisma.User.findFirst({
      where: { id: userId },
    });

    // Check if the service exists
    const serviceExists = await mongoPrisma.Service.findUnique({
      where: { id: serviceId },
      select: { id: true },
    });

    if (!serviceExists) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }
    // Check if feedback already exists for this user and service
    const existingFeedback = await prisma.Feedback.findUnique({
      where: {
         userId, serviceId 
      },
    });

    if (existingFeedback) {
      return res.status(200).json({
        success: false,
        message: "You have already submitted feedback for this service.",
      });
    }

    // Create new feedback entry
    const feedbackData = await mongoPrisma.Feedback.create({
      data: {
        serviceId,
        userId,
        rating,
        comment,
        user_name,
      },
    });

    // Recalculate the average rating for the service
    const { _avg } = await mongoPrisma.Feedback.aggregate({
      where: { serviceId },
      _avg: { rating: true },
    });

    // Update the service's average rating
    await mongoPrisma.Service.update({
      where: { id: serviceId },
      data: {
        rating: parseFloat((_avg.rating || 0).toFixed(2)),
      },
    });

    return res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
    });
  } catch (error) {
    console.error("Error processing feedback:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing feedback",
    });
  }
};


export default feedback;
