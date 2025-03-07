import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
const postgresPrisma = new PostgresClient();

const getTasksForEvent = async(req, res, next) => {
  try {
    const eventId = req.params.id;
    const tasks = await postgresPrisma.EventTask.findMany({
      where: {
        eventId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.status(200).json({
      success: true,
      tasks
    });
  } catch (error) {
    next(error);
  }
};
export default getTasksForEvent;