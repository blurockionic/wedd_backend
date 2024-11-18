import express from 'express';
import userLogin from "../controllers/userController/login.js"
import userRegistration from "../controllers/userController/register.js"
import verifyEmail from "../controllers/emailVerification.controller.js"

const UserRouter = express.Router();


UserRouter.route("/register").post(userRegistration);
UserRouter.route("/verify-email").get(verifyEmail);
UserRouter.route("/login").post(userLogin);


export default UserRouter;