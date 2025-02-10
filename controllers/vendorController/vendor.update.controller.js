import { vendorSchemaUpdate } from "../../validation schema/vendor.schema.js";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import upload from "../../middleware/multer.middleware.js";

const prisma = new PrismaClient();

const updateVendor = async (req, res, next) => {
  try {
    if (typeof req.body.social_networks === "string") {
      req.body.social_networks = JSON.parse(req.body.social_networks);
    }
    

    if (req.file) {
      req.body.logo_url = req.file; 
    }
    const validatedData = vendorSchemaUpdate.parse(req.body);
    const vendorId = req.user.id;

    const vendor = await prisma.Vendor.findUnique({
      where: { id: vendorId },
    });

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found", success: false });
    }

    const updatedVendor = await prisma.Vendor.update({
      where: { id: vendorId },
      data: validatedData,
    });

    const { password_hash, refresh_Token, resetPassword_Token, resetPassword_Expire, created_at, updated_at, ...vendorResponse } = updatedVendor;

    res.status(200).json({ message: "Vendor updated successfully.", vendor: vendorResponse, success: true });
  } catch (error) {
    next(error);
  }
};

export default updateVendor;

export const uploadVendorMiddleware = upload.single("logo_url");
