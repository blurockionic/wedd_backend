import express from "express";
import UserRouter from "./user.route.js";
import vendorRouter from "./vendor.route.js";
import serviceRouter from "./services.route.js";
import bookingRouter from "./booking.route.js";
import cartRouter from "./cart.route.js";
import AnalyticsRouter from "./analytics.route.js";
import planRouter from "./plan.route.js";
import subscribeRouter from "./subscribe.route.js";
import checklistRouter from "./checklist.route.js";
import generateDescription from "../controllers/AIDescription.controller.js";
import guestRouter from "./guest.route.js";
import inviteRouter from "./inviteTemplate.route.js";
import templatePaymentRouter from "./templatePayment.route.js";
import templateRouter from "./userDataTemplate.route.js";
import eventRouter from "./event.route.js";
import AdminRouter from "./admin.route.js";
import {
  blogRouteAdmin,
  blogRouteUser,
  blogRoutePublic,
} from "../routes/blog.route.js";
import editorRouter from "./editorAssets.route.js";
import watchHistoryRouter from "./watchHistory.template.js";
import {
  partnerRouteUser,
  partnerRouteAdmin,
  partnerRoutePublic,
} from "./partner.route.js";

const routes = express.Router();

routes.use("/users", UserRouter);
routes.use("/vendors", vendorRouter);
routes.use("/services", serviceRouter);
routes.use("/booking", bookingRouter);

routes.use("/admin", AdminRouter);

routes.use("/cart", cartRouter);
routes.use("/analytics", AnalyticsRouter);
routes.use("/plan", planRouter);
routes.use("/subscribe", subscribeRouter);
routes.use("/checklist", checklistRouter);
routes.use("/generateAIDescription", generateDescription);
routes.use("/guest", guestRouter);
// routes.use("/cardPayment", router);
routes.use("/inviteTemplate", inviteRouter);
routes.use("/template", templatePaymentRouter);
routes.use("/userDataTemplate", templateRouter);
routes.use("/event", eventRouter);
// blog routes
routes.use("/blog/admin", blogRouteAdmin);
routes.use("/blog/user", blogRouteUser);
routes.use("/blog/public", blogRoutePublic);
routes.use("/editorAssets", editorRouter);
routes.use("/templateWatchHistory", watchHistoryRouter);
routes.use("/partners/user", partnerRouteUser);
routes.use("/partners/public", partnerRoutePublic);
routes.use("/partners/admin", partnerRouteAdmin);

export default routes;
