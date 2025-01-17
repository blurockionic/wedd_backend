import express from 'express';


const routes = express.Router();

import UserRouter from './user.route.js';
import vendorRouter from './vendor.route.js';
import serviceRouter from './services.route.js';
import bookingRouter from './booking.route.js';
import cartRouter from './cart.route.js';
import AnalyticsRouter from './analytics.route.js';


routes.use("/users", UserRouter);
routes.use("/vendors", vendorRouter);
routes.use("/services", serviceRouter);
routes.use("/booking", bookingRouter);
routes.use('/cart',cartRouter);
routes.use("/analytics",AnalyticsRouter)



export default routes