import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";

const prisma = new PrismaClient();

const getServiceById = async (req, res, next) => {
  try {
    // Extract service ID from request parameters
    const serviceId = req.params.id;

    const userId = req.user?.id || "anonymous"; 

    if (userId === "anonymous") {
      console.log("Anonymous user is viewing the service.");
    }

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
        media: {
          select: {
            image_urls: true,
            video_urls: true,
          },
        },
      },
    });

    // If no service found, throw an error
    if (!service) {
      throw new CustomError(`Service with ID ${serviceId} not found.`, 404);
    }
    
    
console.log(req.user.role,serviceId);

   if(req?.user?.role==="user"){
    await prisma.Views.upsert({
      where: {
        serviceId_userId: {
          serviceId: serviceId,
          userId: userId,
        },
      },
      update: {
        viewCount: {
          increment: 1, // Increment view count for existing entry
        },
      },
      create: {
        serviceId: serviceId,
        userId: userId,
        lead: false, // Default to `false` for now
        viewCount: 1,
      },
    });
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
