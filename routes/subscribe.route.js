import express from "express";
import { createOrder, getPaymentHistory, getSubscription, verifyPayment } from "../controllers/payment/payment.js";
import jwtAuthentication from "../middleware/auth.middleware.js";




const subscribeRouter = express.Router();

subscribeRouter.use(jwtAuthentication);

subscribeRouter.post("/create-order/:planId",createOrder);
subscribeRouter.post("/verify-payment",verifyPayment)
subscribeRouter.get("/payment-history",getPaymentHistory)
subscribeRouter.get("/subscription",getSubscription)

export default subscribeRouter;
