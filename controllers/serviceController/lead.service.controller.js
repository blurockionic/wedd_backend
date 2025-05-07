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

    await mongoPrisma.views.upsert({
      where: {
        serviceId_userId: {
          serviceId,
          userId,
        },
      },
      update: {
        lead: true,
        updated_at: new Date(),
      },
      create: {
        serviceId,
        userId,
        lead: true,
        viewCount: 1,
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

export const getPartnerDashboardData = async (req, res) => {
  try {
    
    const partnerLocation = req.params.city

    if (!partnerLocation) {
      return res.status(400).json({
        success: false,
        message: "Location is required.",
      });
    }

    // Step 1: Fetch Views with matching Service location
    const views = await mongoPrisma.views.findMany({
      where: {
        lead: false,
        service: {
          city: {
            contains: partnerLocation.city,
            mode: "insensitive",
          },
        },
      },
      include: {
        service: true,
      },
    });

    if (!views.length) {
      return res.json({ message: "No views found", data: [] });
    }

    // Step 2: Extract unique user IDs
    const userIds = [...new Set(views.map((view) => view.userId))].filter(
      (id) => !id.startsWith("anon-")
    );

    const users = await Promise.all(
      userIds.map(async (userId) => {
        const user = await postgresPrisma.User.findUnique({
          where: { id: userId },
          select: {
            id: true,
            user_name: true,
            phone_number: true,
            email: true,
            wedding_location: true,
            wedding_date: true,
            profile_photo: true,
          },
        });

        if (!user) {
          console.warn(`User not found for ID: ${userId}`);
        }

        return (
          user || {
            id: userId,
            user_name: "Unknown",
            phone_number: "N/A",
            email: "N/A",
          }
        );
      })
    );

    // Filter out any null or undefined users (if any)
    const filteredUsers = users.filter(
      (user) => user !== null && user !== undefined
    );

    const usersMap = new Map(filteredUsers.map((u) => [u.id, u]));

    // Step 5: Merge user data into view records
    const enrichedViews = views
      .filter((view) => view.lead === true)
      .map((view) => ({
        id: view.id,
        viewCount: view.viewCount,
        lead: view.lead,
        createdAt: view.created_at,
        updatedAt: view.updated_at,
        service: {
          name: view.service.service_name,
          location: view.service.location,
          category: view.service.service_category,
        },
        user: usersMap.get(view.userId) || null,
      }));

    return res.status(200).json({
      success: true,
      total: enrichedViews.length,
      data: enrichedViews,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching dashboard data.",
    });
  }
};
