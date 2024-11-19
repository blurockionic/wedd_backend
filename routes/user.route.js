import express from 'express';
import userLogin from "../controllers/userController/login.js"
import userRegistration from "../controllers/userController/register.js"
import verifyEmail from "../controllers/emailVerification.controller.js"
import userlogout from '../controllers/userController/logout.js';
import jwtAuthentication from "../middleware/auth.middleware.js"
import { refreshAccessToken } from '../controllers/userController/refreshAccessToken.js';

const UserRouter = express.Router();


UserRouter.route("/register").post(userRegistration);
UserRouter.route("/verify-email").get(verifyEmail);
UserRouter.route("/login").post(userLogin);
UserRouter.route("/logout").post(jwtAuthentication,userlogout);
UserRouter.route("/refresh-access-token").post(refreshAccessToken);





export default UserRouter;