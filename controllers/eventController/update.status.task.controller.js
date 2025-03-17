import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
const postgresPrisma = new PostgresClient();

const updateTaskStatus = async(req, res, next) => {
    try {
      const taskId = req.params.taskId;
      const { status } = req.body;
      
      const updatedTask = await postgresPrisma.EventTask.update({
        where: {
          id: taskId
        },
        data: {
          done: status
        }
      });
      
      res.status(200).json({
        success: true,
        message: "Task status updated",
        task: updatedTask
      });
    } catch (error) {
      next(error);
    }
  };

export default updateTaskStatus;