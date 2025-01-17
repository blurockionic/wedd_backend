
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

    // Respond with the service details
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
  
      // Fetch all services where the user has lead status
      const services = await mongoPrisma.Views.findMany({
        where: {
            service: {
                vendorId, 
              },
          lead: true, 
        },
        
        include: {
          service: true
        },
      });

      console.log(services)
  
  

  
      const leadData = await Promise.all(
        services.map(async (service) => {
          const user = await postgresPrisma.User.findUnique({
            where: {
              id: service.userId,
            },
            select: {
                
              user_name: true,
              phone_number: true,
              email: true,
            },
          });
  
          return {
            serviceId: service.serviceId,
            serviceDetails: service.service, // Includes service details
            updatedAt: service.updated_at,
            userDetails: user, 
          };
        })
      );
  
      return res.status(200).json({
        success: true,
        message: "Lead data fetched successfully.",
        data: leadData,
      });
    } catch (error) {
      next(error);
    }
  };
  