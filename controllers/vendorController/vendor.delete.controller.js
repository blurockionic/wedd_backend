import { PrismaClient } from "../../prisma/generated/mongo/index.js";
// ... other imports

const prisma = new PrismaClient();

const deleteVendorAccount = async (req, res, next) => {
  try {
    const id = req.user.id;

    // Option 1: Try-catch and check for specific error (More robust)
    try {
      const deletedVendor = await prisma.Vendor.delete({
        where: { id },
      });

      if (!deletedVendor) {  // Double-check, just in case
        return res.status(404).json({ 
          message: "Vendor not found (likely already deleted)", 
          success: false 
        });
      }

      return res.status(200).json({
        message: "Vendor account deleted successfully.",
        success: true,
      });

    } catch (error) {
        if (error.code === 'P2025') { // Prisma error code for "Record not found"
          return res.status(404).json({ 
            message: "Vendor not found (likely already deleted)", 
            success: false 
          });
        }
        throw error; // Re-throw the error if it's not the "Record not found" error
    }



    //Option 2: Find first, then delete (Slightly less efficient, but simpler)
    // const vendorExists = await prisma.vendor.findUnique({
    //   where: { id },
    // });

    // if (!vendorExists) {
    //   return res.status(404).json({ 
    //     message: "Vendor not found (likely already deleted)", 
    //     success: false 
    //   });
    // }

    // const deletedVendor = await prisma.vendor.delete({
    //   where: { id },
    // });

    // return res.status(200).json({
    //   message: "Vendor account deleted successfully.",
    //   success: true,
    // });

  } catch (error) {
    next(error); // Pass other errors to your error handler
  }
};

export default deleteVendorAccount;