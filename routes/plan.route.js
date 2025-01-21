import express from "express";
import { createPlan, editPlan } from "../controllers/plan/plan.js";


const planRouter = express.Router();

// POST /create-plan
planRouter.post("/create-plan",createPlan );

// PUT /edit-plan/:id
planRouter.put("/edit-plan/:id", editPlan);

export default planRouter;
