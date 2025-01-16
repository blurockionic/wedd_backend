import { PrismaClient } from "../../prisma/generated/mongo/index.js";

const prisma = new PrismaClient();

export const makeLead = async (req, res, next) => {
  try {
    const serviceId = req.params.id;
    const userId = req.user?.id;
    // const userRole = req.user?.role?.toLowerCase();

    if (!serviceId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters: serviceId or userId.",
      });
    }
// update the view count for the service
    await prisma.Views.update({
      where: {
        serviceId_userId: {
          serviceId: serviceId,
          userId: userId,
        },
      },
      data: {
        lead: true,
      },
    });

    // Respond with the service details
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
