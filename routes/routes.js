import express from 'express';
const routes = express.Router();



import UserRouter from './user.route.js';
import vendorRouter from './vendor.route.js';


routes.use("/users", UserRouter);
routes.use("/vendors", vendorRouter);


export default routes