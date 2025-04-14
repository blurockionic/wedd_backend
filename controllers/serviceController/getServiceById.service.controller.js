import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";

const prisma = new PrismaClient();

const getServiceById = async (req, res, next) => {
  try {
    const serviceId = req.params.id;

    const ip =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      "unknown";
    const anonId = `anon-${ip}`;
    const userId = req.user?.id || anonId;

    const service = await prisma.Service.findUnique({
      where: { id: serviceId },
      include: {
        vendor: {
          select: {
            id: true,
            name: true,
            email: true,
            phone_number: true,
            business_name: true,
          },
        },
        media: {
          select: {
            image_urls: true,
            video_urls: true,
          },
        },
        feedback: {
          select: {
            comment: true,
            rating: true,
            id: true,
            userId: true,
            user_name: true,
          },
        },
      },
    });

    if (!service) {
      throw new CustomError(`Service with ID ${serviceId} not found.`, 404);
    }

    const existingView = await prisma.Views.findUnique({
      where: {
        serviceId_userId: {
          serviceId,
          userId,
        },
      },
    });

    const now = new Date();
    const THRESHOLD_MINUTES = 30;


    if (existingView) {
      const lastUpdated = new Date(existingView.updated_at);
      const diffMinutes = (now - lastUpdated) / (1000 * 60);

      if (diffMinutes >= THRESHOLD_MINUTES) {
        await prisma.Views.update({
          where: {
            serviceId_userId: {
              serviceId,
              userId,
            },
          },
          data: {
            viewCount: { increment: 1 },
          },
        });
      } else {
        console.log(
          `Skipping view increment. Only ${diffMinutes.toFixed(
            1
          )} mins since last view.`
        );
      }
    } else {
      await prisma.Views.create({
        data: {
          serviceId,
          userId,
          viewCount: 1,
          lead: false,
          
        },
      });
    }

    res.status(200).json({
      message: "Service fetched successfully.",
      service,
      success: true,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error);
  }
};

export default getServiceById;
