import { PrismaClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PrismaClient();

const revokeAdmin = async (req, res) => {
    try {
        const { email } = req.params;

        // Check if the requesting user is an admin
        // const requestingUser = await prisma.user.findUnique({
        //     where: { id: req.user.id },
        // });

        // if (!requestingUser || requestingUser.role !== "ADMIN") {
        //     return res.status(403).json({ message: "Access denied. Admins only." });
        // }

        // Find the user to be updated
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.role === "USER") {
            return res.status(400).json({ message: "User is not an admin." });
        }

        // Uncomment if you want to prevent SUPER_ADMIN from being revoked
        // if (user.role === "SUPER_ADMIN") {
        //     return res.status(400).json({ message: "User is SUPER admin!" });
        // }

        // Update the user's role to ADMIN
        const updatedUser = await prisma.user.update({
            where: { email },
            data: { role: "USER" },
        });

        res.status(200).json({
            message: "Admin revoked successfully.",
            user: updatedUser,
        });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default revokeAdmin;
