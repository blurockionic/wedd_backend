import express from "express";
import { createOrder, getPaymentHistory, verifyPayment } from "../controllers/payment/payment.js";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";



const subscribeRouter = express.Router();

subscribeRouter.use(jwtAuthentication);


// POST /create-plan'

subscribeRouter.post("/create-order/:planId",createOrder);
subscribeRouter.post("/verify-payment",verifyPayment)
subscribeRouter.get("/payment-history",getPaymentHistory)

// // PUT /edit-plan/:id
// subscribeRouter.put("/edit-plan/:id", editPlan);

export default subscribeRouter;
