import express from "express";
import upload from "../middleware/multer.middleware.js";
import { PrismaClient } from "../prisma/generated/mongo/index.js";
import CustomError from "../utils/CustomError.js";

const prisma = new PrismaClient();
const uploadRouter = express.Router();

// Helper: Multer upload as a Promise
const singleFileUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload.single("file")(req, res, (err) => {
      if (err) reject(err);
      else resolve(req.file);
    });
  });
};

// POST route for file upload
uploadRouter.post("/upload", async (req, res, next) => {
  const { serviceId } = req.body;

  try {
    // Validate serviceId
    if (!serviceId) {
      throw new CustomError("serviceId is required", 400);
    }

    // Check if the referenced service exists
    const serviceExists = await prisma.service.findUnique({ where: { id: serviceId } });
    if (!serviceExists) {
      throw new CustomError("Service not found", 404);
    }

    // Handle file upload
    const file = await singleFileUpload(req, res);
    if (!file) {
      throw new CustomError("File upload failed", 400);
    }

    // Determine file type (image or video)
    const isImage = file.mimetype.startsWith("image");
    const isVideo = file.mimetype.startsWith("video");

    // Prepare media object to save in the database
    const mediaData = {
      serviceId,
      image_urls: isImage ? [file.path] : [],
      video_urls: isVideo ? [file.path] : [],
    };

    // Save to the database
    const media = await prisma.media.create({
      data: mediaData,
    });

    // Respond with success
    res.status(201).json({
      message: "File uploaded and media reference saved successfully",
      media,
    });
  } catch (error) {
    next(error);
  }
});

export default uploadRouter;
