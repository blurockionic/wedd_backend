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

const getTotalServices = async () => {
    return await prismaMongo.service.count();
};

const getTotalServicesbyType = async () => {
  return await prismaMongo.service.groupBy({
    by: ['service_type'],
    _count: {
      service_type: true,
    }
  });
};

const getServicesData = async () => {
    return await prismaMongo.views.aggregate({
        _sum: {
          viewCount: true,
        },
        _count: {
          lead: true,
        }
    })
};

const getMostViewedServicesData = async () => {
    return  await prismaMongo.views.aggregateRaw({
        pipeline: [
          {
            $lookup: {
              from: "Service",
              localField: "serviceId",
              foreignField: "_id",
              as: "serviceDetails",
            },
          },
          { $unwind: "$serviceDetails" }, // Flatten lookup array
          {
            $group: {
              _id: "$serviceDetails.service_type",
              totalViewCount: { $sum: "$viewCount" }, // Sum of all view counts
              totalLeads: {
                $sum: {
                  $cond: {
                    if: { $eq: ["$lead", true] },
                    then: 1,
                    else: 0,
                  },
                },
              },
            },
          },
          {
            $project: {
              service_type: "$_id",
              _id: 0,
              totalViewCount: 1,
              totalLeads: 1,
            },
          },
        ],
      });  
};

const getTotalSubscribers = async () => {
  return await prismaMongo.subscription.count({
    where: {
      status: "ACTIVE"
    }
  })
};

const getTotalRevenue = async () => {
  return await prismaMongo.subscription.aggregateRaw({
    pipeline: [
      {
        $lookup: {
          from: "Plan",
          localField: "planId",
          foreignField: "_id",
          as: "planDetails",
        },
      },
      { $unwind: "$planDetails" }, // Flatten lookup array
      {
        $group: {
          _id: "$planDetails.name",
          totalRevenue: { $sum: "$planDetails.price" },
        },
      },
      {
        $project: {
          plan: "$_id",
          _id: 0,
          totalRevenue: 1,
        },
      },
    ],
  }); 
};



const generalAnalytics = async (req, res) => {
    try {
        const response = {};

        response.totalUsers = await getTotalUsers();
        response.totalVendors = await getTotalVendors();
        response.totalServices = await getTotalServices();
        response.TotalServicesbyType = await getTotalServicesbyType();
        response.ServicesData = await getServicesData();
        response.MostViewedServicesData = await getMostViewedServicesData();
        response.TotalSubscribers = await getTotalSubscribers();
        response.TotalRevenue = await getTotalRevenue();
    
        return res.status(200).json({ success: true, data: response });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default generalAnalytics;
