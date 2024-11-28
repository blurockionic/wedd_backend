import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";

const prisma = new PrismaClient();

const getServiceById = async (req, res, next) => {
  try {
    // Extract service ID from request parameters
    const serviceId = req.params.id;

    // Fetch the service by ID from the database
    const service = await prisma.Service.findUnique({
      where: {
        id: serviceId,
      },
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

    // If no service found, throw an error
    if (!service) {
      throw new CustomError(`Service with ID ${serviceId} not found.`, 404);
    }

    // Respond with the service details
    res.status(200).json({
      message: "Service fetched successfully.",
      service,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error); // Pass the error to the error-handling middleware
  }
};

export default getServiceById;
