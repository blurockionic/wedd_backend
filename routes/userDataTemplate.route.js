import {
  createTemplate,
  getTemplateById,
  updateTemplate,
  deleteTemplate,
} from "../controllers/userDataTemplate.controller.js";
import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const templateRouter = express.Router();

templateRouter.use(jwtAuthentication, roleMiddleware(["user"]));
templateRouter.route("/").post(createTemplate);
templateRouter
  .route("/:template_id")
  .get(getTemplateById)
  .patch(updateTemplate)
  .delete(deleteTemplate);

export default templateRouter;
