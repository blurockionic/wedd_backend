import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
const postgresPrisma = new PostgresClient();

const updateTask = async(req, res, next) => {
    try {
      const taskId = req.params.taskId;
      const data = req.body;
      
      const updatedTask = await postgresPrisma.EventTask.update({
        where: {
          id: taskId
        },
        data
      });
      
      res.status(200).json({
        success: true,
        message: "Task updated successfully",
        task: updatedTask
      });
    } catch (error) {
      next(error);
    }
  };

export default updateTask;