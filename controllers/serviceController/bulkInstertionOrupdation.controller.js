import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import { z } from "zod";
import CustomError from "../../utils/CustomError.js";
import { serviceCreateSchema } from "../../validation schema/service.schema.js";

const prisma = new PrismaClient();

// Bulk insertion schema
const bulkServiceSchema = z.array(
  serviceCreateSchema.extend({
    id: z.string().optional(), // Optional `id` for updates
  })
);



export const bulkInsertServices = async (req, res) => {
  try {
    // Validate input
    const servicesData = bulkServiceSchema.parse(req.body);


    const sanitizedData = servicesData.map((service) => {
        const { rating, ...sanitizedService } = service; 
        return sanitizedService;
      });


    // Separate data for creation and updates
    const toCreate = sanitizedData.filter((service) => !service.id);
    const toUpdate = sanitizedData.filter((service) => service.id);


console.log(toCreate,{extends:true}+" created")
console.log(toUpdate,{extends:true}+"updated")

    // Bulk insert new services
    let createdCount = 0;
    if (toCreate.length > 0) {
      const createdServices = await prisma.Service.createMany({
        data: toCreate.map((service) => ({
          ...service,
          vendorId: req.user.id, 
        })),
      });
      createdCount = createdServices.count || toCreate.length;
    }

    // Bulk update existing services
    const updatedServices = [];
    if (toUpdate.length > 0) {
      for (const service of toUpdate) {
        const { id, ...updateData } = service;
        const updated = await prisma.Service.update({
          where: { id },
          data: updateData, // Update with remaining data excluding the id
        });
        updatedServices.push(updated);
      }
    }

    // Send response
    res.status(200).json({
      message: "Bulk operation successful",
      createdCount,
      updatedCount: updatedServices.length,
    });
  } catch (error) {
    console.error("Bulk insert/update error:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: "Validation error",
        details: error.errors,
      });
    }

    // Custom error handling
    throw new CustomError("Bulk operation failed", 500);
  }
};

export default bulkInsertServices;
