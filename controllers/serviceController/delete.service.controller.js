import CustomError from "../../utils/CustomError.js";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";
const prisma = new PrismaClient();

const deleteService = async (req, res, next) => {
    try {
      const serviceId = req.params.id;
      
      // Attempt to delete the service from the database
      const deletedService = await prisma.Service.delete({
        where: {
          id: serviceId, // Find service by ID
          vendorId: req.user.id, // Ensure the service belongs to the authenticated vendor
        },
      });
  
      if (!deletedService) {
        return res.status(404).json({ message: "Service not found." });
      }
  
      res.status(200).json({
        message: "Service deleted successfully.",
      });
    } catch (error) {
      console.error(
        `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
      );
  
      next(new CustomError("An error occurred during service deletion.", 500));
    }
  };
  
  export default deleteService;