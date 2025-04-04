import { PrismaClient as MongoPrismaClient } from "../../prisma/generated/mongo/index.js";

const mongoPrisma = new MongoPrismaClient();

export const saveImages = async (req, res) => {
  try {
    // Extract user info from JWT
    const { id: userId, role } = req.user;

    const { images, tags } = req.body;

    if (!images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ error: "No images provided" });
    }


    console.log(images,tags);
    


    const tagArray = Array.isArray(tags)
      ? tags.map((tag) => tag.trim())  
      : typeof tags === "string"
      ? tags.split(",").map((tag) => tag.trim()) // Convert string to array
      : [];

    // Prepare images for insertion
    const newImages = images.map((img) => ({
      userId,
      uploadedBy: role,
      asset_folder:img.asset_folder,
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

    const whereClause = asset_folder ? { userId, asset_folder } : { userId };

    const images = await mongoPrisma.EditorAsset.findMany({
  
      where: whereClause,
      orderBy: { createdAt: "desc" }, // Fetch newest images first
    });

    res.status(200).json({ images });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch images", details: error.message });
  }
};
