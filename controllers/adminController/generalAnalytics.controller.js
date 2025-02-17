import { PrismaClient as PrismaClientPostgre } from "../../prisma/generated/postgres/index.js";
import { PrismaClient as PrismaClientMongo } from "../../prisma/generated/mongo/index.js";

const prismaPost = new PrismaClientPostgre();
const prismaMongo = new PrismaClientMongo();

const getTotalUsers = async () => {
    return await prismaPost.user.count();
};

const getTotalVendors = async () => {
    return await prismaMongo.vendor.count();
};

const generalAnalytics = async (req, res) => {
    try {
        const response = {};

        response.totalUsers = await getTotalUsers();
        response.totalVendors = await getTotalVendors();
        // response.totalRevenue = await getTotalRevenue();
    
        return res.status(200).json({ success: true, data: response });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default generalAnalytics;
