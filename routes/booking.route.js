import express from 'express';
import { createBooking } from '../controllers/bookingController/createBooking.controller.js';
import roleMiddleware from '../middleware/role.middleware.js';
import jwtAuthentication from '../middleware/auth.middleware.js';



const bookingRouter = express.Router();


bookingRouter.route("/create").post(jwtAuthentication,roleMiddleware(["USER"]),createBooking)

export default bookingRouter;