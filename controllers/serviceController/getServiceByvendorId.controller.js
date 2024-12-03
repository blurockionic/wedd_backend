import { z } from 'zod';
import CustomError from "../../utils/CustomError.js";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";


const prisma = new PrismaClient();

// Controller to get all services
const getAllServicesByVendorId = async (req, res) => {
    try {
      const vendorId = req.params.id;  // Assuming `vendorId` is part of the URL path
      
      // Fetch services by vendorId
      const services = await prisma.Service.findMany({
        where: {
          vendorId: vendorId,  // Proper filtering by vendorId
        },
        include: {
          vendor: {
            select: {
              name: true,
              description: true,
            },
          },
        },
      });
  
      res.status(200).json({
        services,
      });
    } catch (error) {
      console.error(error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: 'Invalid query parameters', details: error.errors });
      } else {
        throw new CustomError("Error fetching services", 500);
      }
    }
  };

export default getAllServicesByVendorId;