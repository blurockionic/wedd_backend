import CustomError from "../../utils/CustomError.js";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";

const mongoPrisma = new MongoClient();
const getMostViewedServices = async (req, res, next) => {
  try {
    // Aggregate views per service
    const mostViewedServices = await mongoPrisma.Views.groupBy({
      by: ["serviceId"],
      _sum: { viewCount: true },
      orderBy: { _sum: { viewCount: "desc" } }, // Sort by highest views
      take: 5, // Fetch top 5 most viewed services (adjust as needed)
    });

    if (mostViewedServices.length === 0) {
      throw new CustomError("No views found.", 404);
    }

    // Fetch service details for these IDs
    const serviceIds = mostViewedServices.map(s => s.serviceId);

    const services = await mongoPrisma.Service.findMany({
      where: {
        id: { in: serviceIds },
       
      },
      include:{
        media:true
      }
    });

    // Merge service details with view count
    const mostViewed = services.map(service => {
      const viewData = mostViewedServices.find(v => v.serviceId === service.id);
      return {
        id: service.id,
        name: service.service_name,
        description: service.description,
        image: service.image, // Assuming there’s an image field
        totalViews: viewData?._sum.viewCount ?? 0,
      };
    });

    // Send response
    res.status(200).json({
      message: "Most viewed services fetched successfully.",
      ServiceResult:services,
      mostViewed
    });
  } catch (error) {
    console.error(`Error Type: ${error.constructor.name}, Message: ${error.message}`);
    next(error);
  }
};

export default getMostViewedServices;
