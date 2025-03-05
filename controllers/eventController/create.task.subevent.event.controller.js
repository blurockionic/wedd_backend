import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

const createTaskOnSubEvent = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const eventId = req.params.id;

    const subEventId = req.params.subEventId;

    const { items } = req.body;

    // validate
    if (!userId) {
      throw new CustomError("User id not found", 404);
    }

    // ✅ Fetch User from DB
    const user = await postgresPrisma.user.findUnique({
      where: { id: userId },
    });

    if (!eventId) {
      throw new CustomError("Event id required", 404);
    }

    const isEventExit = await postgresPrisma.event.findUnique({
      where: {
        id: eventId,
      },
    });

    if (!isEventExit) {
      throw new CustomError("Event not found", 404);
    }

    //   ✅ sub event exist or not
    const isSubEventExit = await postgresPrisma.subEvent.findUnique({
      where: {
        id: subEventId,
      },
    });

    if (!isSubEventExit) {
      throw new CustomError("Sub-Event not found", 404);
    }

    // ✅ create subevent
    const newSubTask = await postgresPrisma.subEventTask.createMany({
      data: {
        userId,
        subEventId,
        items: items,
      },
    });

    console.log(newSubTask)

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      newSubTask: newSubTask,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );

    next(error);
  }
};

export default createTaskOnSubEvent;
