import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js"; 

const prisma = new PrismaClient();


const  deleteVendorAccount = async (req, res, next) => {
    try {

      // Extract user ID from request object (assumes authentication middleware sets it)

      const id = req.user.id;
      
  
      // Find the user in the database
      const deletedUser = await prisma.User.delete({
        where: { id },
      });

      if (!deletedUser) {
        throw new CustomError("Vendor not found or already deleted.", 404);
      }
  
  
      // Step 4: Return a success response
      res.status(200).json({
        message: "Vendor account deleted successfully.",
      });
    } catch (error) {
        if (error instanceof prisma.PrismaClientKnownRequestError) {
            // Handle specific Prisma errors (e.g., record not found)
            if (error.code === "P2025") {
              return next(new CustomError("Vendor not found.", 404));
            }
          }
      
    
          next(error);

    }
  };
  
  export default deleteVendorAccount;
  
