import express from 'express';
import jwtAuthentication from "../middleware/auth.middleware.js"    
// import { createTemplate, deleteTemplate, getAllTemplates, getTemplateById, updateTemplate, uploadTemplate } from "../controllers/invitationTemplate.controller.js";
import roleMiddleware from '../middleware/role.middleware.js';
import { createTemplate, deleteTemplate, getAllTemplates, getTemplateById, updateTemplate } from '../controllers/invitationTemplateController/invitation.template.controller.js';
const inviteRouter = express.Router();

// ✅ Get all templates
inviteRouter.route("/get").get(getAllTemplates);

inviteRouter.use(jwtAuthentication);
// inviteRouter.route('/').post(uploadTemplate,createTemplate).get(getAllTemplates);
// inviteRouter.route('/:id').get(getTemplateById).delete(deleteTemplate).patch(uploadTemplate,updateTemplate);

// ✅ Create a new template
inviteRouter.route("/create").post(createTemplate);



// ✅ Get a template by ID
inviteRouter.route("/:id").get(getTemplateById);

// ✅ Update a template
inviteRouter.route("/:id").put(updateTemplate);

// ✅ Delete a template
inviteRouter.route("/:id").delete(deleteTemplate);


export default inviteRouter;
