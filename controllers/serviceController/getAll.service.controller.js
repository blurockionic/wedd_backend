import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";

const prisma = new PrismaClient();

// Get all services function
const getAllServices = async (req, res, next) => {
  try {
    // Optionally, we can add filters or pagination here
    const services = await prisma.Service.findMany({
      include: {
        vendor: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!services || services.length === 0) {
      return res.status(404).json({ message: "No services found." });
    }

    res.status(200).json({
      message: "Services retrieved successfully.",
      services,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    
    next(new CustomError("An error occurred while retrieving services.", 500));
  }
};

export default getAllServices;
