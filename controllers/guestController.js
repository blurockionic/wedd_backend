import Guest from "../models/Guest.js";
export const addGuest = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const newGuest = new Guest({ name, phone });
    await newGuest.save();
    res
      .status(201)
      .json({ message: "Guest added successfully", guest: newGuest });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add guest", message: error.message });
  }
};


export const getGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).json({ guests });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch guests" });
  }

};

export const updateGuestStatus = async (req, res) => {
  try {
    const { guestId } = req.params;
    const { status } = req.body;

    const updatedGuest = await Guest.findByIdAndUpdate(guestId, { status }, { new: true });

    if (!updatedGuest) {
      return res.status(404).json({ message: 'Guest not found' });
    }

    res.status(200).json({
      message: 'Guest status updated successfully',
      guest: updatedGuest
    });
  } catch (error) {
    console.error('Error updating guest status:', error);
    res.status(500).json({ error: 'Failed to update status' });
  }
};

export const deleteGuest = async (req, res) => {
  try {
    const { guestId } = req.params;

    // Attempt to delete the guest from the database
    const deletedGuest = await Guest.findByIdAndDelete(guestId);

    if (!deletedGuest) {
      return res.status(404).json({ message: 'Guest not found' });
    }

    res.status(200).json({
      message: 'Guest deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting guest:', error);
    res.status(500).json({ error: 'Failed to delete guest' });
  }
};