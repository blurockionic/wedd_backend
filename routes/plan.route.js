import express from "express";
import { createPlan, editPlan, getPlan } from "../controllers/plan/plan.js";


const planRouter = express.Router();

// POST /create-plan
planRouter.get("/:id",getPlan)
planRouter.post("/create-plan",createPlan );

// PUT /edit-plan/:id
planRouter.put("/edit-plan/:id", editPlan);


export default planRouter;
