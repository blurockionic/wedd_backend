import express from "express";
import { createOrder } from "../controllers/payment/payment.js";



const subscribeRouter = express.Router();

// POST /create-plan
subscribeRouter.post("/create-order",createOrder);

// // PUT /edit-plan/:id
// subscribeRouter.put("/edit-plan/:id", editPlan);

export default subscribeRouter;
