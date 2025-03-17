import { PrismaClient as PostgresPrismaClient } from "../../prisma/generated/postgres/index.js";
import { PrismaClient as MongoPrismaClient } from "../../prisma/generated/mongo/index.js";

const postgresPrisma = new PostgresPrismaClient();
const mongoPrisma = new MongoPrismaClient();

export const getHeroSectionAnalytics = async (req,res) => {
  try {
    const verifiedUsersCount = await postgresPrisma.user.count({
      where: { is_verified: true },
    });

    const verifiedVendorsCount = await mongoPrisma.vendor.count({
      where: { is_verified: true },
    });

    const totalActiveServiceCount = await mongoPrisma.service.count({
      where: { status: "active" },
    });

    return res.json({
        verifiedUsers: verifiedUsersCount,
        verifiedVendors: verifiedVendorsCount,
        activeServices: totalActiveServiceCount,
      });
  } catch (error) {
    console.error("Error in getHeroSectionAnalytics:", error);
    return { error: error.message };
  }
};
