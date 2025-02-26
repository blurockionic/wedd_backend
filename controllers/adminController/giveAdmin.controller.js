import { PrismaClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PrismaClient();

const giveAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the requesting user is an admin
        // const requestingUser = await prisma.user.findUnique({
        //     where: { id: req.user.id },
        // });

        // if (!requestingUser || requestingUser.role !== "ADMIN") {
        //     return res.status(403).json({ message: "Access denied. Admins only." });
        // }

        // Find the user to be updated
        const user = await prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.role === "ADMIN") {
            return res.status(400).json({ message: "User is already an admin." });
        }

        // Update the user's role to ADMIN
        const updatedUser = await prisma.user.update({
            where: { id },
            data: { role: "ADMIN" },
        });

        res.status(200).json({
            message: "User successfully converted to admin.",
            user: updatedUser,
        });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default giveAdmin;
