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
      return res.status(404).json({ message: "Cart is empty" });
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

        if (!service) {
          throw new CustomError(
            `Service with ID ${cartItem.serviceId} not found`,
            404
          );
        }

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
export const addProductToCart = async (req, res, next) => {
  try {
    const { serviceId } = req.body;
    const userId = req.user.id;

    if (!userId) {
      throw new CustomError("userId is required but not found", 404);
    }

    // Validate if the service exists in MongoDB
    const service = await mongoPrisma.Service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      throw new CustomError("Service not found in MongoDB", 404);
    }

    // Check if the service is already in the cart
    const existingCartItem = await postgresPrisma.Cart.findFirst({
      where: {
        userId: userId,
        serviceId: serviceId,
      },
    });

    if (existingCartItem) {
      throw new CustomError("Service already exists in the cart", 400);
    }

    // Add service to the cart in PostgreSQL
    const cartItem = await postgresPrisma.Cart.create({
      data: {
        userId: userId,
        serviceId: serviceId,
      },
    });

    res.status(201).json({
      success: true,
      message: "Service added to cart successfully",
      cartItem,
    });
  } catch (error) {
    next(error); // Pass to error middleware
  }
};

export const removeProductFromCart = async (req, res, next) => {
  try {
    const { id } = req.params; // Extract cart item ID from URL params
    const userId = req.user.id; // Get the user ID from authenticated user

    if (!userId) {
      throw new CustomError("userId is required but not found", 404);
    }

    // Check if the cart item exists for the user
    const cartItem = await postgresPrisma.Cart.findFirst({
      where: {
        serviceId: id, // Cart item's ID
        userId, // User's ID
      },
    });

    if (!cartItem) {
      throw new CustomError(
        "Cart item not found or you do not have permission",
        404
      );
    }

    console.log("cartItem", cartItem);

    await postgresPrisma.Cart.deleteMany({
      where: {
        AND: [{ id }, { userId }],
      },
    });

    res.status(200).json({
      success: true,
      message: "Service removed from cart successfully",
    });
  } catch (error) {
    next(error); // Pass to error middleware
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
