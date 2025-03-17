import { PrismaClient as PrismaClientPostgre } from "../../prisma/generated/postgres/index.js";

const prismaPost = new PrismaClientPostgre();

const userSearch = async (req, res) => {
    try {
        const { name, email, phoneNumber, location } = req.body;
        const where = {};
        console.log(req.body);

        if (name) {
            where.user_name = { contains: name, mode: 'insensitive' };
        }

        if (email) {
            where.email = { contains: email, mode: 'insensitive' };
        }

        if (phoneNumber) {
            where.phone_number = { contains: phoneNumber, mode: 'insensitive' };
        }

        if (location) {
            where.OR = [
                { wedding_location: { contains: location, mode: 'insensitive' } }
            ];
        }

        const users = await prismaPost.user.findMany({
            where,
            select: {
                id: true,
                user_name: true,
                email: true,
                phone_number: true,
                wedding_location: true,
                created_at: true,
                is_verified: true
            }
        });

        return res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default userSearch;