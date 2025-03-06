import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();


const updateVendor = async (req, res, next) => {
    try {
        // Extract eventId and serviceId from request body
        const { eventId, serviceId } = req.body; 
        
        // Extract vendorId from request parameters
        const { vendorId } = req.params; 

        // Validate required fields
        if (!eventId || !serviceId) {
            throw new CustomError("Event ID and Service ID are required");
        }

        // Check if vendor exists before updating
        const vendor = await postgresPrisma.EventVendors.findUnique({
            where: { id: vendorId },
        });

        if (!vendor) {
            return res.status(404).json({ error: "Vendor not found" });
        }

        // Update the vendor with new eventId and serviceId
        const updatedVendor = await postgresPrisma.EventVendors.update({
            where: { id: vendorId },
            data: { eventId, serviceId },
        });

        // Respond with success message and updated vendor data
        res.status(200).json({
            success: true,
            message: "Vendor updated successfully",
            vendor: updatedVendor,
        });
    } catch (error) {
        // Log detailed error information for debugging
        console.error(
            `Error Type: ${error.constructor.name}, Message: ${error.message}`
        );

        next(error); // Pass the error to the next middleware
    }
};

export default updateVendor;
