import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

 const postgresPrisma = new PostgresClient(); 

const createTaskOnEvent = async(req, res, next)=>{
    try {
        const userId = req.user.id 

        const eventId = req.params.id 

        const {items} =  req.body 

        // validate
    if (!userId) {
        throw new CustomError("User id not found", 404);
      }
  
      // ✅ Fetch User from DB
      const user = await postgresPrisma.User.findUnique({
        where: { id: userId },
      });

      if(!eventId){
        throw new CustomError("Event id required", 404)
      }

      const isEventExit = await postgresPrisma.Event.findUnique({
        where:{
            id: eventId 
        }
      })

      if(!isEventExit){
        throw new CustomError("Event not found", 404)
      }

      const newTask =  await postgresPrisma.EventTask.createMany({
        data: {
            eventId,
            items: items
        }
      })

      res.status(201).json({
        success: true,
        message: "Task created successfully",
        newTask: newTask
      })
    } catch (error) {
        console.error(
            `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
          );
      
          next(error);
    }
}


export default createTaskOnEvent