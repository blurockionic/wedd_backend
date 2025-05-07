import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

import createPartner from "../controllers/partnerFormController/create.partner.controller.js";
import {
  getPartners,
  getPartnerById,
  updatePartnerStatus,
} from "../controllers/partnerFormController/get.partner.controller.js";
import { getPartnerDashboardData } from "../controllers/serviceController/lead.service.controller.js";

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECREAT_KEY,
});

// Multer Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "wedding-wire-clone/partners";
    if (file.fieldname === "governmentId") folder += "/government-ids";
    else if (file.fieldname === "businessCertificate")
      folder += "/business-certificates";
    else if (file.fieldname === "workSamples") folder += "/work-samples";

    return {
      folder,
      resource_type: file.mimetype === "application/pdf" ? "raw" : "image",
      allowedFormats: ["jpg", "jpeg", "png", "pdf"],
      public_id: `${file.fieldname}-${Date.now()}`,
      transformation: file.mimetype.startsWith("image")
        ? [{ width: 1000, crop: "limit" }]
        : undefined,
    };
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only images and PDF files are allowed!"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const uploadFields = upload.fields([
  { name: "governmentId", maxCount: 1 },
  { name: "businessCertificate", maxCount: 1 },
  { name: "workSamples", maxCount: 5 },
]);

const partnerRouteAdmin = express.Router();
const partnerRouteUser = express.Router();
const partnerRoutePublic = express.Router();

// 🚀 Public
partnerRoutePublic.post("/", uploadFields, createPartner);

// 🔒 Admin
partnerRouteAdmin.use(
  jwtAuthentication,
  roleMiddleware(["ADMIN", "SUPER_ADMIN"])
);
partnerRouteAdmin.get("/", getPartners);
partnerRouteAdmin.get("/:id", getPartnerById);
partnerRouteAdmin.patch("/:id", updatePartnerStatus);

// 🔑 Authenticated User
partnerRouteUser.use(jwtAuthentication);

partnerRouteUser.post("/", uploadFields, createPartner);
partnerRouteUser.get("/dashboard/:city", getPartnerDashboardData);

export { partnerRouteAdmin, partnerRouteUser, partnerRoutePublic };
