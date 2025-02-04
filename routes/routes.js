import express from 'express';


const routes = express.Router();

import UserRouter from './user.route.js';
import vendorRouter from './vendor.route.js';
import serviceRouter from './services.route.js';
import bookingRouter from './booking.route.js';
import cartRouter from './cart.route.js';
import AnalyticsRouter from './analytics.route.js';
import planRouter from './plan.route.js';
import subscribeRouter from './subscribe.route.js';
import checklistRouter from './checklist.route.js';

routes.use("/subscribe",subscribeRouter)
routes.use("/users", UserRouter);
routes.use("/vendors", vendorRouter);
routes.use("/services", serviceRouter);
routes.use("/booking", bookingRouter);
routes.use('/cart',cartRouter);
routes.use("/analytics",AnalyticsRouter)
routes.use("/plan",planRouter)
routes.use("/checklist", checklistRouter)




export default routes