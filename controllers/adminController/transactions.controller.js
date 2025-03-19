import { PrismaClient as PrismaClientMongo } from "../../prisma/generated/mongo/index.js";
import { PrismaClient as PrismaClientPostgre } from "../../prisma/generated/postgres/index.js";

const prismaPost = new PrismaClientPostgre();
const prismaMongo = new PrismaClientMongo();

const getVendorTransactions = async() => {
    return await prismaMongo.payment.findMany();
}

const getUserTransactions = async() => {
    return await prismaPost.payment.findMany();
}

const transactions = async (req, res) => {
    try {
        const response = {};

        response.vendorTransactions = await getVendorTransactions();
        // uncomment when user payments added
        // response.userTransactions = await getUserTransactions();
    
        return res.status(200).json({ success: true, data: response });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default transactions;
