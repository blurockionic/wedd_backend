import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema(
  {
    title1: String,
    title2: String,
    brideName: String,
    groomName: String,
    weddingDate: String,
    weddingTime: String,
    weddingLocation: String,
    description: String,
  },
  { timestamp: true }
);

const Template = mongoose.model("Template", TemplateSchema);

export default Template;
