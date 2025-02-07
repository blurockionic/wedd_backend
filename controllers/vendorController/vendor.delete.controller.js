import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js"; 


const prisma = new PrismaClient();


const  deleteVendorAccount = async (req, res, next) => {
    try {

      // Extract user ID from request object (assumes authentication middleware sets it)

      const id = req.user.id;
      
  
      // Find the user in the database
      const deletedVendor = await prisma.Vendor.delete({
        where: { id },
      });
  
      if (!deletedVendor) {
        throw new CustomError("Vendor not found or already deleted.", 404);
      }
    
      // Step 4: Return a success response
      res.status(200).json({
        message: "Vendor account deleted successfully.",
        success:true
      });
    } catch (error) {
   

      next(error); 
    }
  };
  
  export default deleteVendorAccount;
  
