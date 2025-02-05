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
<<<<<<< HEAD
import generateDescription from '../controllers/AIDescription.controller.js';
=======
import checklistRouter from './checklist.route.js';
>>>>>>> 8320f677327545dad4e75bb13e82303acae0641e


routes.use("/users", UserRouter);
routes.use("/vendors", vendorRouter);
routes.use("/services", serviceRouter);
routes.use("/booking", bookingRouter);
routes.use('/cart',cartRouter);
routes.use("/analytics",AnalyticsRouter)
routes.use("/plan",planRouter)
routes.use("/subscribe",subscribeRouter)
<<<<<<< HEAD
routes.use("/generateAIDescription",generateDescription)
=======
routes.use("/checklist", checklistRouter)
>>>>>>> 8320f677327545dad4e75bb13e82303acae0641e



export default routes