import { PrismaClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PrismaClient();

const giveSuperAdmin = async (req, res) => {
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

        if (user.role === "SUPER_ADMIN") {
            return res.status(400).json({ message: "User is already an SUPER admin." });
        }

        // Update the user's role to ADMIN
        const updatedUser = await prisma.user.update({
            where: { email },
            data: {role: "SUPER_ADMIN" },
        });

        res.status(200).json({
            message: "User successfully converted to SUPER admin.",
            user: updatedUser,
        });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default giveSuperAdmin;
