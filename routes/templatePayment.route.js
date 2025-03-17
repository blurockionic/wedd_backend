import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import { createPayment } from "../controllers/templatePayment.controller.js";


const templatePaymentRouter = express.Router();

templatePaymentRouter.use(jwtAuthentication);

templatePaymentRouter.post("/create-order/:cardId",createPayment);

export default templatePaymentRouter;