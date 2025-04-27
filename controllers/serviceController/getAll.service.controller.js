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
      city,
      sort_by,
      sort_order,
      state,
      rating,
      status,
      vendorId,
      vendor_name
    } = validatedQuery;

    const where = {}; // Initialize where clause for filtering

    // Add filters for service_type if provided
    if (service_type) where.service_type = { contains: service_type, mode: "insensitive" };

    // Add filters for price range if provided
    if (minPrice && minPrice !== null) where.min_price = { gte: minPrice };
    if (state) where.state = state;
    if (city) where.city = city;

    // Add filters for rating if provided
    if (rating && rating !== null) where.rating = { gte: rating };

    // Add filters for vendorId if provided
    if (vendorId && vendorId !== null) where.vendorId = vendorId;

  where.status = status ?? "active";

    let vendorIds = []; 
    if (vendor_name && vendor_name.trim() !== "") {
      const vendorsWithName = await prisma.Vendor.findMany({
        where: {
          name: {
            contains: vendor_name.trim(),
            mode: "insensitive",
          },
        },
        select: { id: true },
      });

      if (vendorsWithName.length > 0) {
        const nameVendorIds = vendorsWithName.map((vendor) => vendor.id);

        // If location was also provided, take the intersection of both vendor lists
        if (vendorIds.length > 0) {
          vendorIds = vendorIds.filter((id) => nameVendorIds.includes(id));
        } else {
          vendorIds = nameVendorIds;
        }
      } else {
        throw new CustomError("No vendors found matching the specified name", 404);
      }
    }

    // Apply vendor ID filtering if location or name matched vendors
    if (vendorIds.length > 0) {
      where.vendorId = { in: vendorIds };
    }

    // Get the total count of services matching the filters
    const totalServices = await prisma.Service.count({ where });

    // If no services match, return an appropriate error
    if (totalServices === 0) {
      throw new CustomError("No services found matching the specified criteria", 404);
    }

    // Fetch the services with pagination and associated vendor data
    const services = await prisma.Service.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: sort_by ? { [sort_by]: sort_order || "asc" } : undefined,
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
        media: true,
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

    const ServiceResult = services.map((service) => ({
      ...service,
      vendor: service.vendor || { id: null, name: null, description: null, city: null },
    }));

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
    } else {
      return next(error);
    }
  }
};

export default getAllServices;
