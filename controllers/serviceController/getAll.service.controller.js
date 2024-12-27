import { z } from "zod";
import CustomError from "../../utils/CustomError.js";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import { querySchema } from "../../validation schema/service.schema.js"; // Assuming schema is defined here

const prisma = new PrismaClient();

// Controller to get all services
const getAllServices = async (req, res, next) => {
  try {
    // Validate query parameters
    const validatedQuery = querySchema.parse(req.query);

    const {
      page = 1,
      limit = 10,
      service_type,
      minPrice,
      location,
      sort_by, 
      sort_order,
      rating
    } = validatedQuery;

    const where = {}; // Initialize where clause for filtering

    // Add filters for service_type if provided
    if (service_type) where.service_type = { contains: service_type, mode: "insensitive" };

    // Add filters for price range if provided
    if (minPrice && minPrice !== null) where.min_price = { gte: minPrice };

    // Add filters for rating if provided
    if (rating && rating !== null) where.rating = { gte: rating };
  

    let vendorsInLocation
    if (location) {
       vendorsInLocation = await prisma.Vendor.findMany({
        where: {
          city: {
            contains  : location.trim().toLowerCase(),
            mode: "insensitive",
          },
        },
        select: { id: true },
      });

      console.log(vendorsInLocation,{extends: true});
      

      if (vendorsInLocation.length > 0) {
        const vendorIds = vendorsInLocation.map((vendor) => vendor.id);
        where.vendorId = { in: vendorIds };
      } else {
        throw new CustomError(
          "No vendors found for the specified location",
          404
        );
      }
    }

    // Get the total count of services matching the filters
    const totalServices = await prisma.Service.count({ where });

    // If no services match, return an appropriate error
    if (totalServices === 0) {
      throw new CustomError(
        "No services found matching the specified criteria",
        404
      );
    }

    // Fetch the services with pagination and associated vendor data
    const services = await prisma.Service.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy:{
        [sort_by]: sort_order,

      },
      include: {
        vendor: {
          select: {
            id: true,
            name: true,
            description: true,
            city: true,
            business_name: true,
          },
        },
        media:true
      },
    });
    const ServiceResult = services.map((service) => ({
      ...service,
      vendor: service.vendor || { id: null, name: null, description: null, city: null }, 
    }));
    console.log(ServiceResult.media);
    

    // Send the response with services data and pagination info
    res.status(200).json({
      ServiceResult,
      total: totalServices,
      page: parseInt(page),
      totalPages: Math.ceil(totalServices / limit),
    });
  } catch (error) {
    // Handle validation or custom errors
    if (error instanceof z.ZodError) {
      return next(new CustomError("Invalid query parameters", 400));
    } else if (error instanceof CustomError) {
      return next(error);
    } else {
      return next(error);
    }
  }
};

export default getAllServices;
