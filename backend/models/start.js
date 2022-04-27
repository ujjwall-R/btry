import mongoose from "mongoose";

const getStarted = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String },

  email: {
    type: String,
    unique: true,
    required: true,
  },
  contact: {
    type: Number,
  },
  budget: { type: Number, required: true },
  description: { type: String, required: true },
});

const StartData = mongoose.model("StartData", getStarted);

export default StartData;
