import express from "express";
import {
  addGuest,
  getGuests,
  updateGuestStatus,
  deleteGuest,
} from "../controllers/guestController.js";
const router = express.Router();


router.post("/add", addGuest);


router.get("/", getGuests);

router.put("/update-status/:guestId", updateGuestStatus);

router.delete("/delete/:guestId", deleteGuest);


export default router;
