import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

const deleteEventTask = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const userId = req.user?.id;
    const eventTaskId = req.params.eventTaskId;

    // ✅ Validate Request
    if (!userId) return next(new CustomError("User ID is required", 400));
    if (!eventId) return next(new CustomError("Event ID is required", 400));
    if (!eventTaskId) return next(new CustomError("Event Task ID is required", 400));

    // ✅ Check if Event Exists
    const event = await postgresPrisma.Event.findUnique({
      where: { id: eventId },
    });

    if (!event) return next(new CustomError("Event not found", 404));

    // ✅ Check if Event-Task Exists
    const eventTask = await postgresPrisma.EventTask.findUnique({
      where: { id: eventTaskId, eventId }, 
    });

    if (!eventTask) return next(new CustomError("Event Task not found", 404));


    // ✅ Validate User - Check if the user is authorized to delete the event
    if (event.userId !== userId) {
      return next(new CustomError("You are not authorized to delete this sub-event", 403));
    }

    // ✅ Delete related data (Tasks & Vendors linked to Sub-Event)
    await postgresPrisma.EventTask.delete({
      where: { id: eventTaskId },
    });


    res.status(200).json({
      success: true,
      message: "Event-Task deleted successfully",
    });

  } catch (error) {
    console.error(`Error Type: ${error.constructor.name}, Message: ${error.message}`);
    next(error);
  }
};

export default deleteEventTask;
