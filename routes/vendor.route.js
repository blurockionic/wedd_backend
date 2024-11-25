import express from 'express';
import vendorRegistration from '../controllers/vendorController/vendor.registration.controller.js';
import vendorLogin from '../controllers/vendorController/vendor.login.controller.js';
import verifyEmail from '../controllers/emailVerification.controller.js';
import jwtAuthentication from '../middleware/auth.middleware.js';
import vendorLogout from '../controllers/vendorController/vendor.logout.controller.js';

const vendorRouter = express.Router();


vendorRouter.route("/register").post(vendorRegistration);
vendorRouter.route("/login").post(vendorLogin);
vendorRouter.route("/verify-email").get(verifyEmail);
vendorRouter.route("/logout").post(jwtAuthentication,vendorLogout);


export default vendorRouter