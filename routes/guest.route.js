import express from "express";
const guestRouter = express.Router();
import {
  addGuest,
  getGuests,
  updateGuestStatus,
  deleteGuest,
  getGuestById,
} from "../controllers/guestController.js";

import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

guestRouter.use(jwtAuthentication, roleMiddleware(["user"]));

guestRouter.route("/").post(addGuest).get(getGuests);

guestRouter
  .route("/:guestId")
  .get(getGuestById)
  .put(updateGuestStatus)
  .delete(deleteGuest);

export default guestRouter;
