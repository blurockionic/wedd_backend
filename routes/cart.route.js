import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import {
 
  clearCart,
  getCart,
  toggleCart,
} from "../controllers/cartController/Cart.controller.js";

const cartRouter = express.Router();

// // Routes for cart operations
cartRouter.use(jwtAuthentication, roleMiddleware(["USER", "ADMIN", "SUPER_ADMIN"]));


//clear the cart
cartRouter.delete("/clear", clearCart);

// Fetch the user's cart
cartRouter.get("/", getCart);

// Add a product to the cart
cartRouter.post("/", toggleCart);

export default cartRouter;
