
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();
const mongoPrisma = new MongoClient();

export const makeLead = async (req, res, next) => {
  try {
    const serviceId = req.params.id;
    const userId = req.user?.id;

    if (!serviceId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters: serviceId or userId.",
      });
    }

    const updatedView = await mongoPrisma.Views.update({
      where: {
        serviceId_userId: {
          serviceId: serviceId,
          userId: userId,
        },
      },
      data: {
        lead: true,
      },
    });


    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const leaddetails = async (req, res, next) => {
  try {
    const vendorId = req.user?.id;

    if (!vendorId) {
      return res.status(400).json({
        success: false,
        message: "User ID is missing.",
      });
    }


    // Fetch all services for this vendor
    const services = await mongoPrisma.Service.findMany({
      where: { vendorId: vendorId },
      select: { id: true },
    });

    const serviceIds = services.map((service) => service.id);

    if (serviceIds.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No services found for this vendor.",
        data: [],
      });
    }

    // Fetch all leads related to the vendor's services
    const leads = await mongoPrisma.Views.findMany({
      where: {
        lead: true,
        serviceId: { in: serviceIds }, 
      },
      include: {
        service: true,
      },
    });



    const leadData = await Promise.all(
      leads.map(async (lead) => {
        const user = await postgresPrisma.User.findUnique({
          where: { id: lead.userId },
          select: {
            user_name: true,
            phone_number: true,
            email: true,
          },
        });

        if (!user) {
          console.warn(`User not found for ID: ${lead.userId}`);
        }


        return {
          serviceId: lead.serviceId,
          serviceDetails: lead.service,
          updatedAt: lead.updated_at,
          userDetails: user || {
            user_name: "Unknown",
            phone_number: "N/A",
            email: "N/A",
          },
        };
      })
    );

    return res.status(200).json({
      success: true,
      message: "Lead data fetched successfully.",
      data: leadData,
    });
  } catch (error) {
    console.error("Error fetching lead details:", error);
    next(error);
  }
};
