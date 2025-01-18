import z from "zod";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";

const validateFeedback = z.object({
  comment: z.string().transform((str) => str.trim().toLowerCase()),
  rating: z.number().min(1).max(5),
});

const prisma = new PrismaClient();

const feedback = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const userId = req.user.id; // Authenticated user ID
    const { rating, comment } = validateFeedback.parse(req.body);

    console.log("serviceId", serviceId);
    console.log("userId", userId);
    console.log("rating and comment", rating, comment);

    // Check if the service exists
    const serviceExists = await prisma.Service.findUnique({
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
    const existingFeedback = await prisma.Feedback.findFirst({
      where:{
        userId, serviceId
      }
    });

    if (existingFeedback) {
      return res.status(400).json({
        success: false,
        message: "You have already submitted feedback for this service.",
      });
    }

    // Create new feedback entry
    const feedbackData = await prisma.Feedback.create({
      data: {
        serviceId,
        userId,
        rating,
        comment,
      },
    });

    // Recalculate the average rating for the service
    const { _avg } = await prisma.Feedback.aggregate({
      where: { serviceId },
      _avg: { rating: true },
    });

    // Update the service's average rating
    await prisma.Service.update({
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
