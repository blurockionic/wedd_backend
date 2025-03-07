import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

const deleteSubEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const userId = req.user?.id;
    const subEventId = req.params.subEventId;

    // ✅ Validate Request
    if (!userId) return next(new CustomError("User ID is required", 400));
    if (!eventId) return next(new CustomError("Event ID is required", 400));
    if (!subEventId) return next(new CustomError("Sub-Event ID is required", 400));

    // ✅ Check if Event Exists
    const event = await postgresPrisma.Event.findUnique({
      where: { id: eventId },
    });

    if (!event) return next(new CustomError("Event not found", 404));

    // ✅ Check if Sub-Event Exists
    const subEvent = await postgresPrisma.SubEvent.findUnique({
      where: { id: subEventId, eventId }, // Ensure it's part of the event
    });

    if (!subEvent) return next(new CustomError("Sub-Event not found", 404));

    // ✅ Validate User - Check if the user is authorized to delete the event
    if (event.userId !== userId) {
      return next(new CustomError("You are not authorized to delete this sub-event", 403));
    }

    // ✅ Delete related data (Tasks & Vendors linked to Sub-Event)
    await postgresPrisma.SubEventTask.deleteMany({
      where: { subEventId },
    });

    await postgresPrisma.SubEventVendors.deleteMany({
      where: { subEventId },
    });

    // ✅ Delete the Sub-Event itself
    await postgresPrisma.SubEvent.delete({
      where: { id: subEventId },
    });

    res.status(200).json({
      success: true,
      message: "Sub-Event deleted successfully",
    });

  } catch (error) {
    console.error(`Error Type: ${error.constructor.name}, Message: ${error.message}`);
    next(error);
  }
};

export default deleteSubEvent;
