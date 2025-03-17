import upload from "../middleware/multer.middleware.js";
import { PrismaClient as PostgresClient } from "../prisma/generated/postgres/index.js";

const prisma = new PostgresClient();

export const createTemplate = async (req, res) => {
  try {
    const { name, price, template_type, filter , template_category } = req.body;

    let incomingData = {};

    if (name) incomingData.name = name.toLowerCase();
    if (req.file) incomingData.imageUrl = req.file;
    if (filter) incomingData.filter = filter.toLowerCase();
    if (price) incomingData.price = parseFloat(price);
    if (template_type) incomingData.template_type = template_type.toUpperCase();
    if (template_category) incomingData.template_category = template_category;

    const newTemplate = await prisma.InvitationTemplate.create({
      data: incomingData,
    });

    res.status(201).json({
      message: "Template created successfully",
      template: newTemplate,
    });
  } catch (error) {
    console.error("Error creating template:", error);
    res.status(500).json({ error: "Failed to create template" });
  }
};

// Get a single Invitation Template by ID
export const getTemplateById = async (req, res) => {
  try {
    const { id } = req.params;

    const template = await prisma.invitationTemplate.findUnique({
      where: { id },
    });

    if (!template) {
      return res.status(404).json({ error: "Template not found" });
    }

    res.status(200).json(template);
  } catch (error) {
    console.error("Error fetching template:", error);
    res.status(500).json({ error: "Failed to fetch template" });
  }
};

export const updateTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, template_type,filter, template_category } = req.body;

    // Find the template before updating

    console.log(name, price);

    const existingTemplate = await prisma.InvitationTemplate.findUnique({
      where: { id },
    });

    if (!existingTemplate) {
      return res.status(404).json({ error: "Template not found" });
    }

    let incomingData = {};
     
    if (name) incomingData.name = name.toLowerCase();
    if (price) incomingData.price = parseFloat(price);
    if (template_type) incomingData.template_type = template_type.toUpperCase();
    if (filter) incomingData.filter = filter.toLowerCase();
    if (template_category) incomingData.template_category = template_category.toLowerCase();
    if (req.file) incomingData.imageUrl = req.file;

    if (Object.keys(incomingData).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    const updatedTemplate = await prisma.InvitationTemplate.update({
      where: { id },
      data: incomingData,
    });

    res.status(200).json({
      message: "Template updated successfully",
      template: updatedTemplate,
    });
  } catch (error) {
    console.error("Error updating template:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the template.",
      error: error.message,
    });
  }
};

// Delete an Invitation Template
export const deleteTemplate = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.InvitationTemplate.delete({
      where: { id },
    });

    res.status(200).json({ message: "Template deleted successfully" });
  } catch (error) {
    console.error("Error deleting template:", error);
    res.status(500).json({ error: "Failed to delete template" });
  }
};

export const getAllTemplates = async (req, res) => {
  try {
    const templates = await prisma.InvitationTemplate.findMany();
    res.status(200).json(templates);
  } catch (error) {
    console.error("Error fetching templates:", error);
    res.status(500).json({ error: "Failed to fetch templates" });
  }
};

export const uploadTemplate = upload.single("templateImage");
