
import { PrismaClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PrismaClient();

export const addOrUpdateWatchHistory = async (req, res) => {
  const { templateId } = req.params;
  const { id: userId } = req.user;

  try {
    console.log("Adding or updating watch history for user:", userId, "and template:", templateId);

    const existing = await prisma.templateWatchHistory.findUnique({
      where: {
        userId_templateId: {
          userId,
          templateId,
        },
      },
    });

    if (existing) {
      console.log("Updating existing watch history entry");

      const updatedHistory = await prisma.templateWatchHistory.update({
        where: {
          userId_templateId: {
            userId,
            templateId,
          },
        },
        data: {
          watchedAt: new Date(),
        },
      });

      return res.status(200).json({
        success: true,
        message: "Watch history updated",
        data: updatedHistory,
      });
    } else {
      console.log("Creating new watch history entry");

      const newHistory = await prisma.templateWatchHistory.create({
        data: {
          userId,
          templateId,
        },
      });

      return res.status(201).json({
        success: true,
        message: "Watch history created",
        data: newHistory,
      });
    }
  } catch (error) {
    console.error("Error in addOrUpdateWatchHistory:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add or update watch history",
    });
  }
};

export const getWatchHistory = async (req, res) => {
    const { id:userId } = req.user;
    
    try {
        const watchHistory = await prisma.TemplateWatchHistory.findMany({
        where: {
            userId,
        },
        include: {
            template: true,
        },
        orderBy: {
            watchedAt: "desc",
        },
        });
    
        res.status(200).json({
        success: true,
        watchHistory,
        lenght: watchHistory.length,
        });
    } catch (error) {
        console.error("Error in getWatchHistory:", error);
        res.status(500).json({
        success: false,
        message: "Failed to fetch watch history",
        });
    }
    }
