import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

//handle for create event
const createEvent = async (req, res, next) => {
  try {
    const userId = req.user.id;
   
    const { eventName, eventDescription, eventDate, eventStartTime, eventEndTime, eventBudget } = req.body;
 
    // validate
    if (!userId) {
      throw new CustomError("User id is required but not found", 404);
    }
    if (!eventBudget || !eventName || !eventDate || !eventDescription || !eventStartTime || !eventEndTime) {
      throw new CustomError("Event all field required");
    }

    // ✅ Fetch User from DB
    const user = await postgresPrisma.User.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }


    // ✅ Create the event
    const newEvent = await postgresPrisma.Event.create({
      data: {
        userId,
        eventName: eventName,
        eventDescription: eventDescription,
        eventDate: new Date(eventDate),
        eventStartTime : new Date(eventStartTime),
        eventEndTime: new Date(eventEndTime),
        eventBudget: parseFloat(eventBudget),
      },
    });

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );

    next(error);
  }
};

export default createEvent;
