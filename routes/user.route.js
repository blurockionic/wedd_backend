import express from 'express';
import { userRegistration } from "../controllers/User.controller.js";
import verifyEmail from "../controllers/emailVerification.controller.js"
const UserRouter = express.Router();


UserRouter.route("/register").post(userRegistration);
UserRouter.route("/verify-email").get(verifyEmail);


export default UserRouter;