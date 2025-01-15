import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import getVendorDashboardData from "../controllers/anlytics controller/view.controller.js";



const AnalyticsRouter = express.Router();

// Routes for cart operations
AnalyticsRouter.use(jwtAuthentication, roleMiddleware(["VENDOR","ADMIN"]));

//clear the cart
AnalyticsRouter.get("/getViewData", getVendorDashboardData);


export default AnalyticsRouter;