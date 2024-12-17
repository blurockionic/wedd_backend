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
      page,
      limit,
      service_type,
      minPrice,
      maxPrice,
      vendor_name,
      location,
    } = validatedQuery;
    const where = {}; // Initialize where clause for filtering

    // If vendor_name is provided, find the vendor by name
    if (vendor_name) {
      const vendor = await prisma.Vendor.findFirst({
        where: { name: vendor_name },
      });

      if (!vendor) {
        throw new CustomError("Vendor not found", 404);
      }
      where.vendorId = vendor.id;
    }

    // Add filters for service_type
    if (service_type) where.service_type = { contains: service_type }; // Assuming service_type is an array

    // Add filters for price range
    if (minPrice && minPrice !== null) where.min_price = { gte: minPrice };
    if (maxPrice && maxPrice !== null) where.max_price = { lte: maxPrice };

    // Add filters for location
    if (location) {
      const vendorsInLocation = await prisma.Vendor.findMany({
        where: { location: { contains: location, mode: "insensitive" } },
        select: { id: true },
      });

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

    if (totalServices === 0) {
      throw new CustomError(
        "No services found matching the specified criteria",
        404
      );
    }

    // Get the actual services based on the filters
    const services = await prisma.Service.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      include: {
        vendor: {
          select: {
            name: true,
            description: true,
            location: true,
          },
        },
      },
    });

    // Send the response with services data and pagination info
    res.status(200).json({
      services,
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
