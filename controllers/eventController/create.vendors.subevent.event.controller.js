import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";

const postgresPrisma = new PostgresClient();
const mongoPrisma = new MongoClient();

const createSubEventVendor = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const eventId = req.params.id;
    const subEventId = req.params.subEventId;

    // ✅ Validate request parameters
    if (!userId) return next(new CustomError("User ID is required", 400));
    if (!eventId) return next(new CustomError("Event ID is required", 400));
    if (!subEventId) return next(new CustomError("Sub-Event ID is required", 400));

    // ✅ Check if Event Exists
    const event = await postgresPrisma.Event.findUnique({ where: { id: eventId } });
    if (!event) return next(new CustomError("Event not found", 404));

    // ✅ Check if Sub-Event Exists
    const isSubEventExist = await postgresPrisma.SubEvent.findUnique({ where: { id: subEventId } });
    if (!isSubEventExist) return next(new CustomError("Sub-Event not found", 404));

    // ✅ Validate User
    const user = await postgresPrisma.User.findUnique({ where: { id: userId } });
    if (!user) return next(new CustomError("User not found", 404));

    // ✅ Fetch service ID from request body
    const { serviceId } = req.body;
    if (!serviceId) return next(new CustomError("Service ID is required", 400));

    // ✅ Check if Service Exists (from MongoDB)
    const isServiceExist = await mongoPrisma.Service.findUnique({ where: { id: serviceId } });
    if (!isServiceExist) return next(new CustomError("Service not found", 404));

    // ✅ Check if Vendor is already added
    const isAlreadyAdded = await postgresPrisma.SubEventVendors.findFirst({
      where: { serviceId, subEventId },
    });

    if (isAlreadyAdded) return next(new CustomError("Vendor already added.", 400));

    // ✅ Add vendor entry to DB
    const addVendor = await postgresPrisma.SubEventVendors.create({
      data: {
        subEventId,
        userId,
        serviceId,
      },
    });

    res.status(201).json({
      success: true,
      message: "Vendor added successfully",
      vendor: addVendor,
    });

  } catch (error) {
    console.error(`Error Type: ${error.constructor.name}, Message: ${error.message}`);
    next(error);
  }
};

export default createSubEventVendor;
