import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import { createPayment, verifyPayment } from "../controllers/templatePayment.controller.js";


const templatePaymentRouter = express.Router();

templatePaymentRouter.use(jwtAuthentication);

templatePaymentRouter.post("/create-order/:cardId",createPayment);
templatePaymentRouter.post("/verify-payment", verifyPayment);

export default templatePaymentRouter;