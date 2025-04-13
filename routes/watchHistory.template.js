

import express from 'express';
import jwtAuthentication from "../middleware/auth.middleware.js"
import { addOrUpdateWatchHistory, getWatchHistory } from '../controllers/invitationTemplateController/watchHistory.template.controller.js';
import roleMiddleware from '../middleware/role.middleware.js';
const watchHistoryRouter = express.Router();
watchHistoryRouter.use(jwtAuthentication);

watchHistoryRouter.use(roleMiddleware(["user", "admin"]));


watchHistoryRouter.route("/").get(getWatchHistory);
watchHistoryRouter.route("/:templateId").post(addOrUpdateWatchHistory);

export default watchHistoryRouter;