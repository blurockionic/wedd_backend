import CustomError from "../../utils/CustomError.js";
import z from "zod";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import { updateServiceSchema } from "../../validation schema/service.schema.js";

const prisma = new PrismaClient();

const updateService = async (req, res, next) => {

  console.log("hi from update",req.body);
  
  try {
    // Validate the request body using the existing service schema
    const validatedData = updateServiceSchema.parse(req.body);

    // Extract vendor information from the authenticated user
    const vendorEmail = req.user.email;
   
    

    // Get the service ID from the request parameters (assuming it's passed in the URL)
    const serviceId = req.params.id;
    console.log(validatedData);

    // Update the service with the validated data, checking for ownership and uniqueness in one call
    const updatedService = await prisma.Service.update({
      where: {
        id: serviceId, // Find service by ID
        vendorId: req.user.id, // Ensure the service belongs to the authenticated vendor
      },
      data: validatedData, // The new data to update the service with
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

    // Prepare the response, excluding sensitive data like timestamps
    const { created_at, updated_at, ...serviceResponse } = updatedService;

    res.status(200).json({
      message: "Service updated successfully.",
      service: serviceResponse,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );

    if (error instanceof z.ZodError) {
      // Handle validation errors
      return res.status(400).json({ errors: error.errors });
    }

    next(new CustomError("An error occurred during service update.", 500));
  }
};

export default updateService;
