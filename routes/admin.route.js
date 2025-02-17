import express from 'express';
import jwtAuthentication from "../middleware/auth.middleware.js";
import giveAdmin from "../controllers/adminController/giveAdmin.controller.js";
import roleMiddleware from '../middleware/role.middleware.js';
import generalAnalytics from '../controllers/adminController/generalAnalytics.controller.js';

const AdminRouter = express.Router();

AdminRouter.use(jwtAuthentication, roleMiddleware(["ADMIN", "SUPER_ADMIN"]));

// Route to convert user to admin (Only accessible to existing admins)
AdminRouter.route("/give-admin/:id").patch(jwtAuthentication, roleMiddleware(["SUPER_ADMIN"]), giveAdmin);
AdminRouter.route("/general-analytics").get(generalAnalytics);

export default AdminRouter;
