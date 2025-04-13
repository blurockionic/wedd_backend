import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";

const mongoPrisma = new MongoClient();

// Create a new plan
export const createPlan = async (req, res, next) => {
  try {
    const { name, price, duration, description, features, trial_period } =
      req.body;

    

    // Validate the necessary fields before creating the plan
    if (!name?.trim() || price === undefined || !duration?.trim() || !description?.trim()) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const plan = await mongoPrisma.Plan.create({
      data: {
        name,
        price,
        duration,
        description,
        features,
        trial_period,
      },
    });

    res
      .status(201)
      .json({ success: true, message: "Plan created successfully", plan });
  } catch (error) {
    next(error);
  }
};

// Edit an existing plan
export const editPlan = async (req, res, next) => {
  const { name, price, duration, description, features, trial_period } =
    req.body;
  const { id } = req.params; // Plan ID from URL parameters

  try {
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Plan ID is required" });
    }

    // Check if the plan exists
    const existingPlan = await mongoPrisma.Plan.findUnique({
      where: { id },
    });

    if (!existingPlan) {
      return res
        .status(404)
        .json({ success: false, message: "Plan not found" });
    }

    const updatedData = {};

    // Conditionally update fields
    if (name && name.trim() !== "") updatedData.name = name;
    if (price && price > 0) updatedData.price = price;
    if (duration && duration.trim() !== "") updatedData.duration = duration;
    if (description && description.trim() !== "")
      updatedData.description = description;
    if (features && typeof features === "object")
      updatedData.features = features;
    if (trial_period && trial_period > 0)
      updatedData.trial_period = trial_period;

    // If no valid fields to update, send a message
    if (Object.keys(updatedData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided to update",
      });
    }

    // Update the plan in the database
    const updatedPlan = await mongoPrisma.Plan.update({
      where: { id },
      data: updatedData,
    });

    res.status(200).json({
      success: true,
      message: "Plan updated successfully",
      updatedPlan,
    });
  } catch (error) {
    next(error);
  }
};

export const getPlan = async (req, res, next) => {
  try {
    

    const plan = await mongoPrisma.Plan.findMany({
      where: { trial_period: 0 },      
    });

    if (!plan) {
      throw new CustomError("plans not found", 404, false);
    }

    res.status(201).json({
      success: true,
      message: "paln fetched successfully",
      plan,
    });
  } catch (error) {
    next(error);
  }
};
