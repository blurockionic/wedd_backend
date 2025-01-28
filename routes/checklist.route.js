import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { saveChecklist } from "../controllers/checklistController/checklist.controller.js";

const checklistRouter = express.Router();

// Routes for checklist operations
checklistRouter.use(jwtAuthentication, roleMiddleware(["USER"]));

// Save the checklist
checklistRouter.post("/save", saveChecklist);

export default checklistRouter;
