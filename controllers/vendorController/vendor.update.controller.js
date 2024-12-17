import CustomError from "../../utils/CustomError.js";
import z from "zod";
import { vendorSchemaUpdate } from "../../validation schema/vendor.schema.js";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";

const prisma = new PrismaClient();

const updateVendor = async (req, res, next) => {
  try {
   
    const validatedData = vendorSchemaUpdate.parse(req.body);

    const vendorEmail = req.user.email; 

    
    const updatedVendor = await prisma.Vendor.update({
      where: { email: vendorEmail }, 
      data: validatedData, 
    });

 
    const {
      password_hash,
      refresh_Token,
      resetPassword_Token,
      resetPassword_Expire,
      created_at,
      updated_at,
      ...vendorResponse
    } = updatedVendor;

    res.status(200).json({
      message: "Vendor updated successfully.",
      vendor: vendorResponse,
    });
  } catch (error) {
    console.error(`Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`);

    if (error.code === "P2025") {
      // Handle case where vendor does not exist
      return next(new CustomError("Vendor not found.", 404));
    }

    if (error instanceof z.ZodError) {
      // Handle validation errors
      return res.status(400).json({ errors: error.errors });
    }

    next(new CustomError("An error occurred during vendor update.", 500));
  }
};

export default updateVendor;
