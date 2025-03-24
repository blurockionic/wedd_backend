import express from 'express';
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from '../middleware/role.middleware.js';

// Controllers
import giveAdmin from "../controllers/adminController/giveAdmin.controller.js";
import revokeAdmin from '../controllers/adminController/revokeAdmin.controller.js';
import giveSuperAdmin from '../controllers/adminController/giveSuperAdmin.controller.js';
import generalAnalytics from '../controllers/adminController/generalAnalytics.controller.js';
import vendorSearch from '../controllers/adminController/vendorSearch.controller.js';
import serviceSearch from '../controllers/adminController/serviceSearch.controller.js';
import userSearch from '../controllers/adminController/userSearch.controller.js';
import transactions from '../controllers/adminController/transactions.controller.js';


const AdminRouter = express.Router();

AdminRouter.use(jwtAuthentication, roleMiddleware(["ADMIN", "SUPER_ADMIN"]));


AdminRouter.route("/general-analytics").get(generalAnalytics);
AdminRouter.route("/vendor-search").post(vendorSearch);
AdminRouter.route("/service-search").post(serviceSearch);
AdminRouter.route("/user-search").post(userSearch);
AdminRouter.route("/transactions").get(transactions);

// Route to convert user to admin (Only accessible to SUPER admins)
AdminRouter.route("/give-admin/:email").patch(jwtAuthentication, roleMiddleware(["SUPER_ADMIN"]), giveAdmin);
AdminRouter.route("/revoke-admin/:email").patch(jwtAuthentication, roleMiddleware(["SUPER_ADMIN"]), revokeAdmin);
AdminRouter.route("/give-superadmin/:email").patch(jwtAuthentication, roleMiddleware(["SUPER_ADMIN"]), giveSuperAdmin);

export default AdminRouter;