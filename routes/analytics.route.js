import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import getVendorDashboardData from "../controllers/anlytics controller/view.controller.js";
import { leaddetails } from "../controllers/serviceController/lead.service.controller.js";
import { getHeroSectionAnalytics } from "../controllers/anlytics controller/getHeroSectionAnalytics.controller.js";

const AnalyticsRouter = express.Router();

AnalyticsRouter.get("/heroSectionAnalytics", getHeroSectionAnalytics);

AnalyticsRouter.use(jwtAuthentication, roleMiddleware(["VENDOR", "ADMIN"]));

//clear the cart
AnalyticsRouter.get("/getViewData", getVendorDashboardData);
AnalyticsRouter.route("/getlead").get(leaddetails);

export default AnalyticsRouter;
