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
    next(error);
  }
};

export default updateVendor;
