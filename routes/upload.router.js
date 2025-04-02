import express from "express";
import upload from "../middleware/multer.middleware.js";
import { PrismaClient } from "../prisma/generated/mongo/index.js";
import CustomError from "../utils/CustomError.js";
import { v2 as cloudinary } from "cloudinary";

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
        include: { media: true },
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

      const mediaEntry = serviceExists.media?.[0] || {}; // Ensure mediaEntry is an object
      const existingImageUrl = Array.isArray(mediaEntry.image_urls)
        ? mediaEntry.image_urls
        : [];
      const existingVideoUrl = Array.isArray(mediaEntry.video_urls)
        ? mediaEntry.video_urls
        : [];

      const media = await prisma.Media.upsert({
        where: { serviceId: serviceId },
        update: {
          image_urls: [...existingImageUrl, ...imageUrls],
          video_urls: [...existingVideoUrl, ...videoUrls],
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

// POST route for file upload and return string url only

uploadRouter.post(
  "/upload-single",
  upload.single("file"), // Handle a single file upload
  async (req, res, next) => {
    const file = req.file; // Access the uploaded file from Multer

    console.log(file);

    if (!file) {
      return next(new CustomError("No file uploaded", 400));
    }

    try {
      res.status(200).json({
        message: "File uploaded successfully",
        file,
      });
    } catch (error) {
      next(error);
    }
  }
);

uploadRouter.post("/delete/:serviceId", async (req, res, next) => {
  const { serviceId } = req.params;
  const publicId = req.body.publicId?.trim();

  if (!serviceId || !publicId) {
    return next(
      new CustomError("Both serviceId and publicId are required", 400)
    );
  }

  try {
    
    const cloudinaryResponse = await cloudinary.uploader.destroy(publicId, {
      resource_type: "image",
    });

   if (cloudinaryResponse.result !== "ok" && cloudinaryResponse.result !== "not found") {
      return next(
        new CustomError("Failed to delete media from Cloudinary", 500)
      );
    }
    const existingMedia = await prisma.Media.findUnique({
      where: { serviceId },
      select: {
        image_urls: true,
        video_urls: true,
      },
    });

    if (!existingMedia) {
      return next(new CustomError("Media not found for this service", 404));
    }

    // Ensure arrays before filtering
    const updatedImages = (existingMedia.image_urls || []).filter(
      (file) => file.public_id !== publicId
    );
    const updatedVideos = (existingMedia.video_urls || []).filter(
      (file) => file.public_id !== publicId
    );

    // Update database
    const deletedMedia = await prisma.Media.update({
      where: { serviceId },
      data: {
        image_urls: updatedImages,
        video_urls: updatedVideos,
      },
    });

    if (deletedMedia.count === 0) {
      return next(
        new CustomError("Media not found in the database for this service", 404)
      );
    }

    res.status(200).json({
      message: "Media deleted successfully from Cloudinary and the database.",
    });
  } catch (error) {
    console.log(error);

    next(error?.message);
  }
});

uploadRouter.post("/generate-signature", async (req, res, next) => {
  try {
    const { folder } = req.body;
    const timestamp = Math.round(new Date().getTime() / 1000);
    const paramsToSign = { timestamp, folder };

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET
    );

    res.json({ signature, timestamp });
  } catch (error) {
    next(error);
  }
});

export default uploadRouter;
