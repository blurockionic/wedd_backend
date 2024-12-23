import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import CustomError from "../utils/CustomError.js";

// Configure Cloudinary
 cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECREAT_KEY,
});

// Set up Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => ({
    
    folder: "wedding-wire-clone/assets",
    resource_type: file.mimetype.startsWith("video") ? "video" : "image",
    public_id: `${file.fieldname}-${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}`
     // transformation: file.mimetype.startsWith("image")
    //   ? [{ width: 1080, height: 720, crop: "limit", quality: "auto" }]
    //   : undefined
  }),
});

// Multer Upload
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => { 
    const allowedTypes = ["image/png", "image/gif", "image/jpeg", "video/mp4"];
    if (!allowedTypes.includes(file.mimetype)) {
        return cb( new CustomError("Unsupported file type", 400));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB limit for images and videos
  },
});

export default upload;
