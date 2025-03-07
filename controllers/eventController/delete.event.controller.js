import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

const deleteEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const userId = req.user?.id;

    // ✅ Validate Request
    if (!userId) return next(new CustomError("User ID is required", 400));
    if (!eventId) return next(new CustomError("Event ID is required", 400));

    // ✅ Check if Event Exists
    const event = await postgresPrisma.Event.findUnique({
      where: { id: eventId },
    });

    if (!event) return next(new CustomError("Event not found", 404));

    // ✅ Validate User - Check if the user is authorized to delete the event
    if (event.userId !== userId) {
      return next(new CustomError("You are not authorized to delete this event", 403));
    }

    // ✅ Find sub-events related to this event
    const subEvents = await postgresPrisma.SubEvent.findMany({
      where: { eventId },
      select: { id: true },
    });

    // Extract sub-event IDs
    const subEventIds = subEvents.map(subEvent => subEvent.id); 

    // ✅ Delete related data
    if (subEventIds.length > 0) {
      await postgresPrisma.SubEventTask.deleteMany({
        where: { subEventId: { in: subEventIds } }, // Use `subEventId` instead of `eventId`
      });

      await postgresPrisma.SubEventVendors.deleteMany({
        where: { subEventId: { in: subEventIds } },
      });

      await postgresPrisma.SubEvent.deleteMany({
        where: { eventId },
      });
    }

    await postgresPrisma.EventTask.deleteMany({
      where: { eventId },
    });

    await postgresPrisma.EventVendors.deleteMany({
      where: { eventId },
    });

    // ✅ Delete the event itself
    await postgresPrisma.Event.delete({
      where: { id: eventId },
    });

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });

  } catch (error) {
    console.error(`Error Type: ${error.constructor.name}, Message: ${error.message}`);
    next(error);
  }
};

export default deleteEvent;
