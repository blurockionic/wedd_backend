import express from 'express';
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from '../middleware/role.middleware.js';

// Controllers
import giveAdmin from "../controllers/adminController/giveAdmin.controller.js";
import generalAnalytics from '../controllers/adminController/generalAnalytics.controller.js';
import vendorSearch from '../controllers/adminController/vendorSearch.controller.js';
import serviceSearch from '../controllers/adminController/serviceSearch.controller.js';
import userSearch from '../controllers/adminController/userSearch.controller.js';


const AdminRouter = express.Router();

AdminRouter.use(jwtAuthentication, roleMiddleware(["ADMIN", "SUPER_ADMIN"]));

// Route to convert user to admin (Only accessible to existing admins)
AdminRouter.route("/give-admin/:id").patch(jwtAuthentication, roleMiddleware(["SUPER_ADMIN"]), giveAdmin);
AdminRouter.route("/general-analytics").get(generalAnalytics);
AdminRouter.route("/vendor-search").get(vendorSearch);
AdminRouter.route("/service-search").get(serviceSearch);
AdminRouter.route("/user-search").get(userSearch);

export default AdminRouter;