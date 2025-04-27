import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";

const prisma = new PrismaClient();

const getVendorDashboardData = async (req, res, next) => {
  try {
    // Assuming the vendorId is passed as a parameter in the request
    const { id: vendorId } = req.user;

    // Fetch services for this vendor
    const services = await prisma.Service.findMany({
      where: { vendorId: vendorId },
    });

    if (services.length === 0) {
      throw new CustomError(
        `No services found for vendor with ID ${vendorId}.`,
        404
      );
    }


    const { _sum: totalViewsData, _count: totalLeadsData } =
      await prisma.Views.aggregate({
        _sum: {
          viewCount: true,
        },
        _count: {
          lead: true,
        },
        where: {
          serviceId: {
            in: services.map((service) => service.id),
          },
        },
      });

    // Prepare individual service data
    const aggregatedViewsData = await prisma.Views.groupBy({
      by: ["serviceId"],
      _sum: {
        viewCount: true, // Sum the viewCount
      },
      _count: {
        lead: true, // Count the leads where lead is true
      },
      where: {
        serviceId: {
          in: services.map((service) => service.id),
        },
      },
    });

    const profileVisit = await prisma.Vendor.findUnique({
      where: { id: vendorId },
      select: {
        profileViews: true,
      },
    });

    const servicesWithViewData = services.map((service) => {
      const viewData = aggregatedViewsData.find(
        (data) => data.serviceId === service.id
      );

      return {
        id: service.id,
        name: service.service_name,
        description: service.description,
        totalViews: viewData ? viewData._sum.viewCount : 0,
        totalLeads: viewData ? viewData._count.lead : 0,
      };
    });

    console.log(totalViewsData.viewCount, "view count");

    // Sort services by totalViews in descending order and get the top three
    const topThreeServices = [...servicesWithViewData]
      .sort((a, b) => b.totalViews - a.totalViews)
      .slice(0, 3);
    res.status(200).json({
      message: "Vendor dashboard data fetched successfully.",
      totalViews: totalViewsData.viewCount || 0,
      totalLeads: totalLeadsData.lead || 0,
      services: servicesWithViewData,
      profileViews: profileVisit?.profileViews || 0,
      topThreeServices,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}`
    );
    next(error);
  }
};

export default getVendorDashboardData;
