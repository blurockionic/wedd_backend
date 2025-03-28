import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

const updateEvent = async (req, res, next) => {
  const { id } = req.params;
  const { eventName, eventDescription, eventDate, eventBudget, eventStartTime, eventEndTime } = req.body;

  try {
    // ✅ Validate Request
    if (!id) return next(new CustomError("Event ID is required", 400));
    if (!eventName) return next(new CustomError("Event name is required", 400));
    // if (!eventDescription) return next(new CustomError("Event description is required", 400));
    if (!eventDate || isNaN(new Date(eventDate))) return next(new CustomError("Valid event date is required", 400));
    if (!eventBudget || isNaN(eventBudget)) return next(new CustomError("Valid event budget is required", 400));
    // if (!eventStartTime) return next(new CustomError("Event start time is required", 400));
    // if (!eventEndTime) return next(new CustomError("Event end time is required", 400));

    // ✅ Check if Event Exists
    const existingEvent = await postgresPrisma.Event.findUnique({
      where: { id },
    });

    if (!existingEvent) return next(new CustomError("Event not found", 404));

    // ✅ Update Event
    const updatedEvent = await postgresPrisma.Event.update({
      where: { id },
      data: {
        eventName,
        eventDescription,
        eventDate: new Date(eventDate),
        eventBudget: Number(eventBudget), // Ensure eventBudget is stored as a number
        eventStartTime: eventStartTime,
        eventEndTime: eventEndTime,
        updatedAt: new Date(),
      },
    });

    // ✅ Return Success Response
    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: updatedEvent,
    });

  } catch (error) {
    console.error(`Error Type: ${error.constructor.name}, Message: ${error.message}`);
    next(new CustomError("Internal Server Error", 500));
  }
};

export default updateEvent;
