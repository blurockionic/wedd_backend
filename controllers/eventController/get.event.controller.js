import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";

const postgresPrisma = new PostgresClient();
const mongoPrisma = new MongoClient();

const getAllEvent = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Validate userId
    if (!userId) {
      throw new CustomError("User ID not found", 404);
    }

    // ✅ Fetch User from PostgreSQL
    const user = await postgresPrisma.User.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // ✅ Get all events for the user
    const events = await postgresPrisma.Event.findMany({
      where: { userId: userId },
      include: {
        subEvent: {
          include: {
            subEventTask: true,
            subEventVendors: true, // Fetch sub-event vendors (IDs only)
          },
        },
        eventTask: true,
        eventVendors: true, // Fetch event vendors (IDs only)
      },
    });

    if (events.length === 0) {
      return res.status(200).json({ message: "No events found", events: [] });
    }

    // ✅ Fetch service details from MongoDB
    const serviceIds = new Set();
    events.forEach(event => {
      event.eventVendors.forEach(vendor => serviceIds.add(vendor.serviceId));
      event.subEvent.forEach(subEvent => {
        subEvent.subEventVendors.forEach(vendor => serviceIds.add(vendor.serviceId));
      });
    });

    const services = await mongoPrisma.service.findMany({
      where: { id: { in: Array.from(serviceIds) } },
      select: { id: true, service_name: true, min_price: true, service_unit: true},
    });

    // Convert services array to a dictionary for faster lookup
    const serviceMap = {};
    services.forEach(service => {
      serviceMap[service.id] = { name: service.service_name, price: service.min_price, unit: service.service_unit };
    });

    // ✅ Attach service details to event vendors
    events.forEach(event => {
      event.eventVendors = event.eventVendors.map(vendor => ({
        ...vendor,
        name: serviceMap[vendor.serviceId]?.name || "Unknown",
        price: serviceMap[vendor.serviceId]?.price || 0,
        unit: serviceMap[vendor.serviceId]?.unit
      }));

      event.subEvent.forEach(subEvent => {
        subEvent.subEventVendors = subEvent.subEventVendors.map(vendor => ({
          ...vendor,
          name: serviceMap[vendor.serviceId]?.name || "Unknown",
          price: serviceMap[vendor.serviceId]?.price || 0,
          unit: serviceMap[vendor.serviceId]?.unit
        }));
      });
    });

    res.status(200).json({ 
      events, 
      event_summary: {
        total_event_count: events.length,
        total_task_count: events.reduce((sum, event) => sum + event.eventTask.length, 0),
        total_service_count: events.reduce((sum, event) => sum + event.eventVendors.length, 0),
        grand_total: events.reduce((sum, event)=> sum + parseFloat(event.eventBudget), 0)
      }
    });
    

  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error);
  }
};

export default getAllEvent;