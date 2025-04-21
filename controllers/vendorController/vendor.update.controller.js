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

    const cleanedData = Object.fromEntries(
      Object.entries(validatedData).filter(([_, value]) => value !== "")
    );
    
    const updatedVendor = await prisma.Vendor.update({
      where: { id: vendorId },
      data: cleanedData,
    });


    const { password_hash, refresh_Token, resetPassword_Token, resetPassword_Expire, created_at, updated_at, ...vendorResponse } = updatedVendor;

    res.status(200).json({ message: "Vendor updated successfully.", vendor: vendorResponse, success: true });
  } catch (error) {
    next(error);
  }
};

export default updateVendor;



export const addProfileView = async (req, res) => {
  const { vendorId } = req.params;

  

  if (!vendorId) {
    return res.status(400).json({ message: "Vendor ID is required" });
  }

  try {
    const vendor = await prisma.vendor.findUnique({
      where: { id: vendorId },
      select: { profileViews: true },
    });
    
    if (!vendor) {
      throw new Error("Vendor not found");
    }
    
    const updatedVendor = await prisma.vendor.update({
      where: { id: vendorId },
      data: {
        profileViews: (vendor.profileViews || 0) + 1,
      },
    });
    // If the vendor is successfully updated, return the updated vendor
    return res.status(200).json({
      message: "Profile view count updated successfully",
      profileViews: updatedVendor.profileViews,
    });
  } catch (error) {
    // Handle any errors, like vendor not found or database issues
    console.error(error);
    return res.status(500).json({ message: "Failed to update profile view count" });
  }
};


export const uploadVendorMiddleware = upload.single("logo_url");
