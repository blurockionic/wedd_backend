import express from 'express';
import userLogin from "../controllers/userController/login.js"
import userRegistration from "../controllers/userController/register.js"
import verifyEmail from "../controllers/emailVerification.controller.js"
import userlogout from '../controllers/userController/logout.js';
import jwtAuthentication from "../middleware/auth.middleware.js"
import { refreshAccessToken } from '../controllers/userController/refreshAccessToken.js';
import requestPasswordReset from '../controllers/userController/requestPasswordReset.js';
import { resetPassword } from '../controllers/userController/resetPassword.js';
import deleteUserAccount from '../controllers/userController/deleteAccount.js';
import updateUser from '../controllers/userController/update.js';

const UserRouter = express.Router();


UserRouter.route("/register").post(userRegistration);
UserRouter.route("/verify-email").get(verifyEmail);
UserRouter.route("/login").post(userLogin);
UserRouter.route("/logout").post(jwtAuthentication,userlogout);
UserRouter.route("/refresh-access-token").post(refreshAccessToken);
UserRouter.route("/request-password-reset").post(requestPasswordReset)
UserRouter.route("/reset-password").post(resetPassword)
UserRouter.route("/delete-user").delete(jwtAuthentication,deleteUserAccount)
UserRouter.route("/update-user").patch(jwtAuthentication,updateUser)


export default UserRouter;