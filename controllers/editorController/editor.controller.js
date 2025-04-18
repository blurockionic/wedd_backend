import { PrismaClient as MongoPrismaClient } from "../../prisma/generated/mongo/index.js";

import { v2 as cloudinary } from "cloudinary";

const mongoPrisma = new MongoPrismaClient();

export const saveImages = async (req, res) => {
  try {
    // Extract user info from JWT
    const { id: userId, role } = req.user;

    const { images, tags } = req.body;

    if (!images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ error: "No images provided" });
    }

    const tagArray = Array.isArray(tags)
      ? tags.map((tag) => tag.trim())
      : typeof tags === "string"
      ? tags.split(",").map((tag) => tag.trim()) // Convert string to array
      : [];

    // Prepare images for insertion
    const newImages = images.map((img) => ({
      userId,
      uploadedBy: role,
      asset_folder: img.asset_folder,
      type: img.resource_type,
      public_id: img.public_id,
      url: img.secure_url,
      preview_url: img.url || img.secure_url,
      tags: tagArray,
      etag: img.etag,
      name: img.original_filename,
    }));

    // ✅ Check for duplicates BEFORE inserting
    const etags = newImages.map((img) => img.etag);
    const existingImages = await mongoPrisma.EditorAsset.findMany({
      where: { userId, etag: { in: etags } },
      select: { etag: true },
    });

    const existingEtags = new Set(existingImages.map((img) => img.etag));

    // ✅ Only insert non-duplicate images
    const filteredImages = newImages.filter(
      (img) => !existingEtags.has(img.etag)
    );

    if (filteredImages.length === 0) {
      return res.status(400).json({ error: "Duplicate images detected!" });
    }

    const savedImages = await mongoPrisma.EditorAsset.createMany({
      data: filteredImages,
    });

    res.status(201).json({ message: "Images saved successfully", savedImages });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to save images", details: error.message });
  }
};

export const getImages = async (req, res) => {
  try {
    const { asset_folder } = req.query;
    const { id: userId } = req.user;
    // admin // user

     const whereClause = !(asset_folder ==="user_assets")? {  asset_folder } : { userId ,asset_folder};

    const images = await mongoPrisma.EditorAsset.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ images });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch images", details: error.message });
  }
};
export const deleteImage = async (req, res) => {
  try {
    const { public_id } = req.body;

    if (!public_id) {
      return res.status(400).json({ error: "public_id is required" });
    }

    // Delete from Cloudinary
    const cloudRes = await cloudinary.uploader.destroy(public_id);
    console.log(cloudRes); // optional

    // Delete from DB
    const deleted = await mongoPrisma.EditorAsset.deleteMany({
      where: { public_id },
    });

    return res.status(200).json({
      message: "Image deleted successfully",
      deletedCount: deleted.count,
    });
  } catch (error) {
    console.error("❌ Error deleting image:", error);
    return res.status(500).json({ error: "Failed to delete image" });
  }
};
