import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

const updateVendor = async (req, res, next) => {
    try {
        const { eventId, serviceId } = req.body;
        const { vendorId } = req.params;
    
        if (!eventId || !serviceId) {
        throw new CustomError("Event ID and Service ID are required");
        }
    
        const vendor = await postgresPrisma.EventVendors.findUnique({
        where: { id: vendorId },
        });
    
        if (!vendor) {
        return res.status(404).json({ error: "Vendor not found" });
        }
    
        const updatedVendor = await postgresPrisma.EventVendors.update({
        where: { id: vendorId },
        data: {
            eventId,
            serviceId,
        },
        });
    
        res.status(200).json({
        success: true,
        message: "Vendor updated successfully",
        vendor: updatedVendor,
        });
    } catch (error) {
        console.error(
        `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
        );
    
        next(error);
    }
}