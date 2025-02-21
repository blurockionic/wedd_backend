import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [3,'Name must be at least 3 characters long']
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minlength: [10,'Phone number must be at least 10 characters long']
  },
  status: {
    type:String,
    default:"Not invited",
    enum:["Not invited","Invited"]
  },
}, { timestamps: true });

const Guest = mongoose.model('Guest', guestSchema);

export default Guest;  