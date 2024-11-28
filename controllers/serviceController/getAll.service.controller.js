import { PrismaClient } from "../../prisma/generated/mongo/index.js"; 
import CustomError from "../../utils/CustomError.js";

const prisma = new PrismaClient();

const getAllServices = async (req, res) => {
  console.log(req.query, "returning"); // Corrected logging

  try {
    const { page = 1, limit = 10, service_type, minPrice, maxPrice, rating } = req.query;

    // Initialize the where filter object
    const where = {};

    // Add service_type filter if provided
    if (service_type) where.service_type = service_type;

    // Add minPrice and maxPrice filters if provided
    if (minPrice || maxPrice) {
      if (minPrice) {
        where.min_price = {
          gte: parseFloat(minPrice), // Greater than or equal to minPrice
        };
      }
      if (maxPrice) {
        where.max_price = {
          lte: parseFloat(maxPrice), // Less than or equal to maxPrice
        };
      }
    }

    // Add rating filter if provided
    if (rating) {
      where.rating = {
        gte: parseFloat(rating), // Greater than or equal to rating
      };
    }

    // Fetch the filtered services and total count in a single query using aggregation
    const [services, totalServices] = await prisma.$transaction([
      prisma.Service.findMany({
        where,
        skip: (page - 1) * limit, // Calculate the skip based on page number
        take: parseInt(limit),    // Limit number of results per page
        orderBy: {
          created_at: "desc", // Sort by created_at in descending order
        },
      }),
      prisma.Service.count({
        where,
      }),
    ]);

    // Respond with services and pagination info
    res.status(200).json({
      services,
      total: totalServices,
      page: parseInt(page),
      totalPages: Math.ceil(totalServices / limit),
    });
  } catch (error) {
    console.error(error);
    // Throw a custom error with appropriate message
    throw new CustomError("Error fetching services", 500);
  }
};

export default getAllServices;
