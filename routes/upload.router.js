import express from "express";
import upload from "../middleware/multer.middleware.js";
import { PrismaClient } from "../prisma/generated/mongo/index.js";
import CustomError from "../utils/CustomError.js";
import { v2 as cloudinary } from "cloudinary"; 
import e from "express";

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

      console.log(serviceExists);
      

      const existingImageUrl = serviceExists.media?.[0]?.image_urls||[];

      const existingVideoUrl = serviceExists.media?.[0]?.video_urls||[];

    
      

      // Check for existing media and update/create accordingly

      const media = await prisma.Media.upsert({
        where: { serviceId: serviceId },
        update: {
          image_urls: [...imageUrls,...existingImageUrl],
          video_urls: [...videoUrls,...existingVideoUrl],
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

    // Validate the input
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
  const publicId = req.body.publicId;

  if (!serviceId || !publicId) {
    return next(new CustomError("Both serviceId and publicId are required", 400));
  }

  try {
    // Check if the service exists
    const serviceExists = await prisma.Service.findUnique({
      where: { id: serviceId },
    });

    if (!serviceExists) {
      return next(new CustomError("Service not found", 404));
    }

    // Delete the media from Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.destroy(publicId);

    if (cloudinaryResponse.result !== "ok") {
      throw new CustomError("Failed to delete media from Cloudinary", 500);
    }

    // Delete the media record from the database
    const deletedMedia = await prisma.Media.updateMany({
      where: {
        serviceId: serviceId,
        OR: [
          {
            image_urls: {
              has: publicId, // Use `has` to check if `public_id` exists in the array
            },
          },
          {
            video_urls: {
              has: publicId, // Use `has` to check if `public_id` exists in the array
            },
          },
        ],
      },
      data: {
        image_urls: {
          deleteMany: { public_id: publicId }, // Deletes any entry with that `public_id` from image_urls
        },
        video_urls: {
          deleteMany: { public_id: publicId }, // Deletes any entry with that `public_id` from video_urls
        },
      },
    });

    // If no media was found with that public_id
    if (deletedMedia.count === 0) {
      return next(new CustomError("Media not found in the database for this service", 404));
    }

    res.status(200).json({
      message: "Media deleted successfully from Cloudinary and the database.",
    });
  } catch (error) {
    next(error); // Pass errors to error-handling middleware
  }
});

export default uploadRouter;


