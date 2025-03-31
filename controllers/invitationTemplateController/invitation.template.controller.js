import { PrismaClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PrismaClient();

// 📌 Create Invitation Template
export const createTemplate = async (req, res) => {
  try {
    const {
      name,
      description,
      userId,
      jsonData,
      price,
      categoryByAmount,
      categoryByMood,
      categoryByRequirement,
      additionalTags,
      designedBy,
      thumbnailUrl,
      status,
    } = req.body;

    const newTemplate = await prisma.invitationTemplate.create({
      data: {
        name,
        description,
        userId,
        jsonData,
        price,
        categoryByAmount,
        categoryByMood,
        categoryByRequirement,
        additionalTags,
        designedBy,
        thumbnailUrl,
        status,
      },
    });

    res.status(201).json({success: true,
        message: "Template save successfully",
        template: newTemplate
    });
  } catch (error) {
    console.error("Error creating template:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 📌 Get All Templates
export const getAllTemplates = async (req, res) => {
  try {
    const {
      name,
      minPrice,
      maxPrice,
      categoryByAmount,
      categoryByMood,
      categoryByRequirement,
      additionalTags,
      designedBy,
      status,
      minRating,
      maxRating,
      sortBy = "createdAt",
      sortOrder = "desc",
      page = 1,
      limit = 10,
    } = req.query;

    // Pagination setup
    const take = parseInt(limit, 10);
    const skip = (parseInt(page, 10) - 1) * take;

    // Construct filters dynamically
    const filters = {};

    if (name) {
      filters.name = { contains: name, mode: "insensitive" }; // Case-insensitive search
    }
    if (minPrice || maxPrice) {
      filters.price = {
        gte: minPrice ? parseFloat(minPrice) : undefined,
        lte: maxPrice ? parseFloat(maxPrice) : undefined,
      };
    }
    if (categoryByAmount) {
      filters.categoryByAmount = categoryByAmount;
    }
    if (categoryByMood) {
      filters.categoryByMood = categoryByMood;
    }
    if (categoryByRequirement) {
      filters.categoryByRequirement = categoryByRequirement;
    }
    if (additionalTags) {
      filters.additionalTags = { hasSome: additionalTags.split(",") }; // Check for at least one matching tag
    }
    if (designedBy) {
      filters.designedBy = { contains: designedBy, mode: "insensitive" };
    }
    if (status) {
      filters.status = status;
    }
    if (minRating || maxRating) {
      filters.rating = {
        gte: minRating ? parseFloat(minRating) : undefined,
        lte: maxRating ? parseFloat(maxRating) : undefined,
      };
    }

    // Fetch filtered templates
    const templates = await prisma.invitationTemplate.findMany({
      where: filters,
      orderBy: { [sortBy]: sortOrder === "desc" ? "desc" : "asc" },
      skip,
      take,
    });

    // Fetch total count (for pagination)
    const totalTemplates = await prisma.invitationTemplate.count({ where: filters });

    res.status(200).json({
      totalTemplates,
      page: parseInt(page, 10),
      limit: take,
      totalPages: Math.ceil(totalTemplates / take),
      data: templates,
    });
  } catch (error) {
    console.error("Error fetching templates:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// 📌 Get Single Template by ID
export const getTemplateById = async (req, res) => {
  try {
    const { id } = req.params;
    const template = await prisma.invitationTemplate.findUnique({
      where: { id },
    });

    if (!template) {
      return res.status(404).json({ error: "Template Not Found" });
    }

    res.status(200).json(template);
  } catch (error) {
    console.error("Error fetching template:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 📌 Update Invitation Template
export const updateTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTemplate = await prisma.invitationTemplate.update({
      where: { id },
      data: updateData,
    });

    res.status(200).json(updatedTemplate);
  } catch (error) {
    console.error("Error updating template:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 📌 Delete Invitation Template
export const deleteTemplate = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.invitationTemplate.delete({
      where: { id },
    });

    res.status(200).json({ message: "Template deleted successfully" });
  } catch (error) {
    console.error("Error deleting template:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
