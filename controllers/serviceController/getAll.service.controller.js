import { z } from 'zod';
import CustomError from "../../utils/CustomError.js";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import { querySchema } from '../../validation schema/service.schema.js';  // Assuming schema is defined here

const prisma = new PrismaClient();

// Controller to get all services
const getAllServices = async (req, res) => {
  try {
    // Validate query parameters
    const validatedQuery = querySchema.parse(req.query);

    const { page, limit, service_type, minPrice, maxPrice, vendor_name } = validatedQuery;
    const where = {}; // Initialize where clause for filtering
    
    console.log(vendor_name +"myNmae");
    // If vendor_name is provided, find the vendor by name
    if (vendor_name) {
      const vendor = await prisma.Vendor.findFirst({
        where: { name: vendor_name }, // Use 'where' instead of 'filter'
      });

      console.log(vendor,{extends:true}+" is available vendor Id");

      if (!vendor) {
        throw new CustomError("Vendor not found", 404);
      }
      where.vendorId = vendor.id; 
    }
    // Add other filters if present
    if (service_type) where.service_type = service_type;
    if (minPrice && minPrice !== null) where.min_price = { gte: minPrice };
    if (maxPrice && maxPrice !== null) where.max_price = { lte: maxPrice };

    console.log("Where clause built:", where); // Log the where clause for debugging

    // Get the total count of services matching the filters
    const totalServices = await prisma.Service.count({ where });

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
    console.error(error);
    // Handle validation errors or general errors
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Invalid query parameters', details: error.errors });
    } else {
      throw new CustomError("Error fetching services", 500);
    }
  }
};

export default getAllServices;
