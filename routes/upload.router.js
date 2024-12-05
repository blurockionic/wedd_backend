import express from "express";
import upload from "../middleware/multer.middleware.js";
import { PrismaClient } from "../prisma/generated/mongo/index.js";
import CustomError from "../utils/CustomError.js";

const prisma = new PrismaClient();
const uploadRouter = express.Router();

// POST route for file upload, using serviceId from URL path
uploadRouter.post(
  "/upload/:serviceId",
  upload.array("files"),
  async (req, res, next) => {
    const { serviceId } = req.params; // Get serviceId from URL parameter

    // Validate serviceId before uploading files
    if (!serviceId) {
      return next(new CustomError("serviceId is required", 400));
    }

    try {
      // Check if the referenced service exists
      const serviceExists = await prisma.Service.findUnique({
        where: { id: serviceId },
      });
      if (!serviceExists) {
        throw new CustomError("Service not found", 404);
      }

      // Ensure files were uploaded
      const files = req.files;
      if (!files || files.length === 0) {
        return next(new CustomError("No files uploaded", 400));
      }

      let imageUrls = [];
      let videoUrls = [];

      const mediaData = [];

      // Loop through each file to handle its type (image or video)
      for (const file of files) {
        const isImage = file.mimetype.startsWith("image");
        const isVideo = file.mimetype.startsWith("video");

        // Prepare the file URL based on type (image or video)
        let fileObject = {
          path: file.path,
          public_id: file.filename,
          original_name: file.originalname,
        };

        if (isImage) {
          imageUrls.push(fileObject);
        } else if (isVideo) {
          videoUrls.push(fileObject);
        }
      }

      // Check for existing media and update/create accordingly

      const media = await prisma.Media.upsert({
        where: { serviceId: serviceId },
        update: {
          image_urls:  [...imageUrls] ,
          video_urls:  [...videoUrls] ,
        },
        create: {
          serviceId: serviceId,
          image_urls: imageUrls,
          video_urls: videoUrls,
        },
      });

      mediaData.push(media);

      // Respond with success
      res.status(201).json({
        message: "Files uploaded and media references saved successfully",
        media: mediaData,
      });
    } catch (error) {
      next(error); // Pass errors to error-handling middleware
    }
  }
);

export default uploadRouter;
