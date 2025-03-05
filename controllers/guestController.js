import { log } from "console";
import { PrismaClient as PostgresClient } from "../prisma/generated/postgres/index.js";
import CustomError from "../utils/CustomError.js";
import {
  GuestSchema,
  GuestUpdateSchema,
} from "../validation schema/guest.schema.js";

const postgresPrisma = new PostgresClient();

export const addGuest = async (req, res) => {
  try {
    const { name, phone } = GuestSchema.parse(req.body);
    const userId = req.user.id;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required" });
    }

    const newGuest = await postgresPrisma.Guest.create({
      data: { name, phone, userId },
    });

    res
      .status(201)
      .json({
        success: true,
        message: "Guest added successfully",
        guest: newGuest,
      });
  } catch (error) {
    console.error("Error adding guest:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getGuests = async (req, res) => {
  try {
    const userId = req.user.id; // Fetch only guests for logged-in user
    const guests = await postgresPrisma.Guest.findMany({
      where: { userId },
    });

    res.status(200).json({ guests });
  } catch (error) {
    console.error("Error fetching guests:", error);
    res.status(500).json({ error: "Failed to fetch guests" });
  }
};

export const updateGuestStatus = async (req, res) => {
  try {
    const { guestId } = req.params;
    const userId = req.user.id;
    const { guestInputDAta } = req.body;
    const { name, phone, status } = (guestInputDAta);

    console.log("guestInput",name, phone, status);


    let data = await postgresPrisma.Guest.findUnique({
      where: { id: guestId },
    });

    if (!data || data.userId !== userId) {
      throw new CustomError("Guest not found", 404);
    }

    let toUpdate = {};

    if (status) {

      toUpdate.status = status.startsWith("Not") ? "NOT_INVITED" : "INVITED";

    }
    if (name) {
      toUpdate.name = name.toLowerCase();
    }
    if (phone) {
      toUpdate.phone = phone;
    }

    console.log("toUpdate", toUpdate);

    const updatedGuest = await postgresPrisma.Guest.update({
      where: { id: guestId },
      data: toUpdate,
    });

    res.status(200).json({
      message: "Guest updated successfully",
      guest: updatedGuest,
    });
  } catch (error) {
    console.error("Error updating guest:", error);
    res.status(500).json({ error: "Failed to update guest" });
  }
};

export const deleteGuest = async (req, res) => {
  try {
    const { guestId } = req.params;
    const userId = req.user.id;

    const deletedGuest = await postgresPrisma.Guest.deleteMany({
      where: { id: guestId, userId },
    });

    res.status(200).json({ message: "Guest deleted successfully" });
  } catch (error) {
    console.error("Error deleting guest:", error);
    res.status(500).json({ error: "Failed to delete guest" });
  }
};

export const getGuestById = async (req, res) => {
  try {
    const { guestId } = req.params;
    const guest = await postgresPrisma.Guest.findUnique({
      where: { id: guestId },
    });

    if (!guest) {
      return res.status(404).json({ message: "Guest not found" });
    }

    res.status(200).json({ guest });
  } catch (error) {
    console.error("Error fetching guest by ID:", error);
    res.status(500).json({ error: "Failed to fetch guest" });
  }
};

export const updateGuest = async (req, res) => {
  try {
    const { guestId } = req.params;
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required" });
    }

    const updatedGuest = await postgresPrisma.Guest.update({
      where: { id: guestId },
      data: { name, phone },
    });

    res.status(200).json({
      message: "Guest updated successfully",
      guest: updatedGuest,
    });
  } catch (error) {
    console.error("Error updating guest:", error);
    res.status(500).json({ error: "Failed to update guest" });
  }
};
