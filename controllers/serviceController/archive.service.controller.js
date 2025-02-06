import { PrismaClient } from "../../prisma/generated/mongo/index.js";
const prisma = new PrismaClient();

const serviceArchive = async (req, res) => {
    try {
        const { id } = req.params;
    
        // Find the service
        const service = await prisma.service.findUnique({
            where: { id },
        });

        if (!service) {
            return res.status(404).json({ message: "Service not found." });
        }

        // Toggle the status
        const newStatus = service.status === "active" ? "archived" : "active";

        // Update the service with the toggled status
        const updatedService = await prisma.service.update({
            where: { id },
            data: { status: newStatus },
        });

        res.status(200).json({
            success: true,
            message: `Service status changed to ${newStatus}.`,
            service: updatedService,
        });
    } catch (error) {
        console.error(
            `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
        );
    
        return res.status(500).json({ message: "Failed to update service status." });
    }
};

export default serviceArchive;
