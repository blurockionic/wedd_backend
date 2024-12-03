import express from 'express';
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { addProductToCart, clearCart, getCart, removeProductFromCart } from "../controllers/cartController/Cart.controller.js";

const cartRouter = express.Router();

// Routes for cart operations
cartRouter.use(jwtAuthentication,roleMiddleware(['USER'])); 

//clear the cart
cartRouter.delete("/clear", clearCart);

// Fetch the user's cart
cartRouter.get("/", getCart);

// Add a product to the cart
cartRouter.post("/", addProductToCart);

// Remove a product from the cart by ID
cartRouter.delete("/:id", removeProductFromCart);



export default cartRouter;
