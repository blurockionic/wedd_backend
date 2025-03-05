
import { log } from "console";
import { PrismaClient as PostgresClient } from "../prisma/generated/postgres/index.js";

const prisma = new PostgresClient();
import z from "zod";

const templateSchema = z.object({
  userId: z.string().optional(),
  eventHeading: z.string().optional(),
  eventSubheading: z.string().optional(),
  brideName: z.string().optional(),
  groomName: z.string().optional(),
  eventDate: z.string().refine((date) => !isNaN(Date.parse(date)),{
    message: "Invalid date format",
  }),
  weddingTime: z.string().optional(),
  weddingLocation: z.string().optional(),
  description: z.string().optional(),
});
const updateTemplateSchema = templateSchema.partial();

export const createTemplate = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      eventHeading,
      eventSubheading,
      brideName,
      groomName,
      eventDate,
      weddingTime,
      weddingLocation,
      description,
    } = templateSchema.parse(req.body);

    const data = {
      userId,
      eventHeading,
      eventSubheading,
      brideName,
      groomName,
      eventDate: new Date(eventDate).toISOString(),
      weddingTime,
      weddingLocation,
      description
    };
    console.log(data);

    const newTemplate = await prisma.UserDataTemplate.create({
      data,
    });

    res.status(201).json({message:"invitaion card created",  success: true, template: newTemplate });
  } catch (error) {
    console.error("Error creating template:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getAllTemplates = async (req, res) => {
  try {
    const templates = await prisma.UserDataTemplate.findMany();
    res.status(200).json({ success: true, templates });
  } catch (error) {
    console.error("Error fetching templates:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
export const getTemplateById = async (req, res) => {
  try {
    const { template_id } = req.params;
    log(template_id);

    const userId = req.user.id;

    const template = await prisma.UserDataTemplate.findMany({
      where: { userId},
    });

    if (!template) {
      return res
        .status(404)
        .json({ success: false, message: "Template not found" });
    }

    res.status(200).json({ success: true, template });
  } catch (error) {
    console.error("Error fetching template:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateTemplate = async (req, res) => {
  try {
    const { template_id } = req.params;
    const {
      eventHeading,
      eventSubheading,
      brideName,
      groomName,
      eventDate,
      weddingTime,
      weddingLocation,
      description,
    } = updateTemplateSchema.parse(req.body);

    let data = {};
    if (eventHeading) data.eventHeading = eventHeading;
    if (eventSubheading) data.eventSubheading = eventSubheading;
    if (brideName) data.brideName = brideName;
    if (groomName) data.groomName = groomName;
    if (eventDate) data.eventDate = new Date(eventDate);
    if (weddingTime) data.weddingTime = weddingTime;
    if (weddingLocation) data.weddingLocation = weddingLocation;
    if (description) data.description = description;

    const updatedTemplate = await prisma.UserDataTemplate.update({
      where: { template_id },
      data,
    });

    res.status(200).json({ success: true, template: updatedTemplate });
  } catch (error) {
    console.error("Error updating template:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteTemplate = async (req, res) => {
  try {
    const { template_id } = req.params;

    const template = await prisma.UserDataTemplate.findUnique({
      where: { template_id },
    });

    if (!template) {
      return res
        .status(404)
        .json({ success: false, message: "Template not found" });
    }

    await prisma.UserDataTemplate.delete({ where: { template_id } });

    res.status(200).json({ success: true, message: "Template deleted" });
  } catch (error) {
    console.error("Error deleting template:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
