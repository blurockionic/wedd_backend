import express from "express";
import { createPlan, editPlan, getPlan } from "../controllers/plan/plan.js";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";


const planRouter = express.Router();

// POST /create-plan
planRouter.get("/",getPlan)



planRouter.post("/create-plan",createPlan );

// PUT /edit-plan/:id
planRouter.put("/edit-plan/:id", editPlan);


export default planRouter;
