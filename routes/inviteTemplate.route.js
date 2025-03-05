import express from 'express';
import jwtAuthentication from "../middleware/auth.middleware.js"    
import { createTemplate, deleteTemplate, getAllTemplates, getTemplateById, updateTemplate, uploadTemplate } from "../controllers/invitationTemplate.controller.js";
import roleMiddleware from '../middleware/role.middleware.js';

const inviteRouter = express.Router();


inviteRouter.use(jwtAuthentication);
inviteRouter.route('/').post(uploadTemplate,createTemplate).get(getAllTemplates);
inviteRouter.route('/:id').get(getTemplateById).delete(deleteTemplate).patch(uploadTemplate,updateTemplate);


export default inviteRouter;