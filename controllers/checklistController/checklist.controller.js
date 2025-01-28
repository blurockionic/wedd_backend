import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

// Save Checklist for the logged-in user
export const saveChecklist = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { checklistItems } = req.body; // Assuming checklistItems is an array of items
    console.log("saving checklist");

    if (!userId) {
      throw new CustomError("userId is required but not found", 404);
    }

    if (!checklistItems || !Array.isArray(checklistItems)) {
      throw new CustomError("Checklist items are required", 400);
    }

    // Step 1: Check if a checklist already exists for the user
    const existingChecklist = await postgresPrisma.Checklist.findFirst({
      where: { userId },
    });

    if (existingChecklist) {
      // If a checklist exists, update it
      await postgresPrisma.Checklist.update({
        where: { id: existingChecklist.id },
        data: { items: checklistItems },
      });

      return res.status(200).json({
        success: true,
        message: "Checklist updated successfully",
      });
    }

    // Step 2: If no checklist exists, create a new one
    const newChecklist = await postgresPrisma.Checklist.create({
      data: {
        userId,
        items: checklistItems,
      },
    });

    res.status(201).json({
      success: true,
      message: "Checklist saved successfully",
      checklist: newChecklist,
    });
  } catch (error) {
    next(error);
  }
};
