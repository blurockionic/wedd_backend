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

    // Fetch the user's cart from PostgreSQL
    const cartItems = await postgresPrisma.Cart.findMany({
      where: { userId },
      select: {
        id: true,
        serviceId: true,
        userId: true, // Select other necessary fields from Cart
      },
    });

    if (!cartItems.length) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    // Fetch the service details from MongoDB for each cart item
    const cartWithServices = await Promise.all(
      cartItems.map(async (cartItem) => {
        const service = await mongoPrisma.Service.findUnique({
          where: { id: cartItem.serviceId },
        });

        // Return cart item along with the related service data
        return {
          ...cartItem,
          service: service || null, // If service is not found, return null
        };
      })
    );

    res.status(200).json({
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

    res
      .status(201)
      .json({ message: "Service added to cart successfully", cartItem });
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
        id,        // Cart item's ID
        userId,    // User's ID
      },
    });

    if (!cartItem) {
      throw new CustomError("Cart item not found or you do not have permission", 404);
    }

    // Proceed with deleting the cart item
    const deletedCartItem = await postgresPrisma.Cart.deleteMany({
      where: {
        id_userId: {
          id,        // Cart item's ID
          userId,    // User's ID
        },
      },
    });

    res.status(200).json({ message: "Service removed from cart successfully" });
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

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    next(error);
  }
};
