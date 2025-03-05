import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

const createSubEventOnEvent = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const eventId = req.params.id;

    // ✅ Validate Request
    if (!userId) {
      return next(new CustomError("User ID is required", 400));
    }
    if (!eventId) {
      return next(new CustomError("Event ID is required", 400));
    }

    // ✅ Check if Event Exists
    const event = await postgresPrisma.Event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      return next(new CustomError("Event not found", 404));
    }

    // ✅ Validate User
    const user = await postgresPrisma.User.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return next(new CustomError("User not found", 404));
    }

    // ✅ Extract Request Data
    const {
      subEventName,
      subEventDescription,
      subEventDate,
      subEventBudget,
      subEventStartTime,
      subEventEndTime
    } = req.body;

    // ✅ Create New Sub-Event
    const newSubEvent = await postgresPrisma.SubEvent.create({
      data: {
        eventId,
        subEventName,
        subEventDescription,
        subEventDate: new Date(subEventDate),
        subEventBudget: parseFloat(subEventBudget) || 0, 
        subEventStartTime: new Date(subEventStartTime),
        subEventEndTime: new Date(subEventEndTime)
      },
    });

    res.status(201).json({
      success: true,
      message: "Sub-event created successfully",
      subEvent: newSubEvent,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error);
  }
};

export default createSubEventOnEvent;
