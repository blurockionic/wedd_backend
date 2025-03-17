import CustomError from "../../utils/CustomError.js";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();
const mongoPrisma = new MongoClient();

// Get Cart for the logged-in user
export const getCart = async (req, res, next) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      throw new CustomError("userId is required but not found", 404);
    }

    // Step 1: Fetch cart items from PostgreSQL
    const cartItems = await postgresPrisma.Cart.findMany({
      where: { userId },
      select: {
        id: true,
        serviceId: true, // Get serviceId from PostgreSQL
        userId: true,
      },
    });

    if (!cartItems.length) {
      return res.status(201).json({
        message: "No items found in the cart",
        cartItems: [],
        success: true,
      });
    }

    // Step 2: Fetch related service and media details from MongoDB
    const cartWithServices = await Promise.all(
      cartItems.map(async (cartItem) => {
        const service = await mongoPrisma.Service.findUnique({
          where: { id: cartItem.serviceId },
          include: {
            media: true,
            vendor: {
              select: {
                id: true,
                name: true,
                description: true,
                city: true,
                business_name: true,
              },
            },
          },
        });

        return {
          ...cartItem, // Include cart details from PostgreSQL
          service, // Include service details from MongoDB
        };
      })
    );

    // Step 3: Respond with merged cart and service data
    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      cartItems: cartWithServices,
    });
  } catch (error) {
    next(error); // Pass to error middleware
  }
};
// Add Product/Service to the Cart
export const toggleCart = async (req, res, next) => {
  try {
    const { id } = req.body;
    const userId = req.user.id;

    if (!userId) {
      throw new CustomError("userId is required but not found", 404);
    }

    // Validate if the service exists in MongoDB
    const service = await mongoPrisma.Service.findUnique({
      where: { id },
    });

    if (!service) {
      throw new CustomError("Service not found in MongoDB", 404);
    }

    // Attempt to find the item in the cart
    const deletedItem = await postgresPrisma.Cart.deleteMany({
      where: {
        userId,
        serviceId: id,
      },
    });

    if (deletedItem.count > 0) {
      // If item was deleted, return success response
      return res.status(200).json({
        success: true,
        message: "Service removed from cart successfully",
      });
    }

    // If item wasn't found, add it to the cart
    const cartItem = await postgresPrisma.Cart.create({
      data: {
        userId: userId,
        serviceId: id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Service added to cart successfully",
      cartItem,
    });
  } catch (error) {
    next(error);
  }
};

export const clearCart = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      throw new CustomError("userId is required but not found", 404);
    }

    // Delete all cart items for the logged-in user
    const deletedCartItems = await postgresPrisma.Cart.deleteMany({
      where: { userId },
    });

    if (deletedCartItems.count === 0) {
      throw new CustomError("No cart items found to clear", 404);
    }

    res
      .status(200)
      .json({ success: true, message: "Cart cleared successfully" });
  } catch (error) {
    next(error);
  }
};
