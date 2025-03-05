import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
import { PrismaClient as  MongoClient} from "../../prisma/generated/mongo/index.js";
const postgresPrisma = new PostgresClient();
const mongoPrisma = new MongoClient()

const createEventVendor = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const eventId = req.params.id;

    console.log(eventId)

    // ✅validate
    if (!userId) {
      return next(new CustomError("User ID is required", 400));
    }
    if (!eventId) {
      return next(new CustomError("Event ID is required", 400));
    }

    // ✅ Check if Event Exists
    const event = await postgresPrisma.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      return next(new CustomError("Event not found", 404));
    }

    // ✅ Validate User
    const user = await postgresPrisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return next(new CustomError("User not found", 404));
    }

    // ✅ fetch data from req body 
    const {serviceId} = req.body

    console.log(serviceId, "hello" )

    // ✅ check service is available or not 
    const isServiceExist = await mongoPrisma.service.findUnique({
        where:{
            id: serviceId
        }
    })

    // ✅ validate service 
    if(!isServiceExist){
        return next(new CustomError("Service not found", 404));
    }

    // ✅ check already add or not 
    const isAlreadyAddedOrNot = await postgresPrisma.eventVendors.findFirst({
        where:{
            id: serviceId
        }
    })

     // ✅ vendor already added 
    //  if(!isAlreadyAddedOrNot){
    //     return next(new CustomError("Vendor already added.", 404));
    // }


    // ✅ add entry on db 
    const addVendors = await postgresPrisma.eventVendors.create({
        data:{
            eventId,
            serviceId
        }
    })
    
    res.status(201).json({
        success: true,
        message: "Vendor added successfully",
        vendors: addVendors
    })

  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error);
  }
};

export default createEventVendor;
