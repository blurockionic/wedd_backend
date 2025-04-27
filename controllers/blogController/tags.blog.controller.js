import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PostgresClient();

export const addTag = async (req, res, next) => {
  try {
    const { tagName } = req.body;
    if (!tagName) {
      throw new CustomError("Tag name is required", 400);
    }
    const existingTag = await prisma.tags.findUnique({
      where: { tagName },
    });
    if (existingTag) {
      throw new CustomError("Tag already exists", 400);
    }
    const newTag = await prisma.tags.create({
      data: { tagName },
    });

    res.status(201).json({
      success: true,
      data: newTag,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTag = async (req, res, next) => {
  try {
    const { id } = req.body;

    const tag = await prisma.tags.findUnique({
      where: { id },
    });

    if (!tag) {
      throw new CustomError("Tag not found", 404);
    }

    // First, disconnect the tag from all blogs
    await prisma.tags.update({
      where: { id },
      data: {
        blogs: {
          set: [], // This disconnects all related blogs
        },
      },
    });

    // Then delete the tag
    await prisma.tags.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      data: {},
      message: "Tag deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTagsWithBlogInfo = async (req, res, next) => {
    try {
        const { s = 0, t = 10 } = req.query; // Pagination parameters
        const tags = await prisma.tags.findMany({
            skip: parseInt(s),
            take: parseInt(t),
            include: {
                blogs: {
                    select: {
                        id: true,
                        title: true,
                        status: true,
                        createdAt: true,
                    },
                    where: {
                        status: "PUBLISHED", // Only include published blogs
                    },
                },
            },
            orderBy: {
                tagName: "asc",
            },
        });

        // Add blogCount to each tag
        const tagsWithCount = tags.map((tag) => ({
            ...tag,
            blogCount: tag.blogs.length,
        }));

        res.status(200).json({
            success: true,
            count: tagsWithCount.length,
            data: tagsWithCount,
        });
    } catch (error) {
        next(error);
    }
};

export const getTagByName = async (req, res, next) => {
    try {
      // Extract tagName from URL parameters
      const { tagName } = req.params;
  
      // Validate tagName exists and is not empty
      if (!tagName || typeof tagName !== 'string' || tagName.trim() === '') {
        throw new CustomError("Tag name is required and must be a non-empty string", 400);
      }
  
      const normalizedTagName = tagName.trim();
  
      const tag = await prisma.tags.findUnique({
        where: { 
          tagName: normalizedTagName 
        },
        include: {
          blogs: {
            select: {
              id: true,
              title: true,
              status: true,
              createdAt: true,
              coverImage: true,
              viewCount: true,
              likes: true,
              urlTitle: true,
            },
            where: {
              status: "PUBLISHED",
            },
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });
  
      if (!tag) {
        throw new CustomError(`Tag with name '${normalizedTagName}' not found`, 404);
      }
  
      const tagWithCount = {
        ...tag,
        blogCount: tag.blogs.length,
      };
  
      res.status(200).json({
        success: true,
        data: tagWithCount,
      });
    } catch (error) {
      next(error);
    }
};

export const updateTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { tagName } = req.body;

    if (!tagName) {
      throw new CustomError("Tag name is required", 400);
    }

    // Check if tag exists
    const existingTag = await prisma.tags.findUnique({
      where: { id },
    });

    if (!existingTag) {
      throw new CustomError("Tag not found", 404);
    }

    // Check if new tag name already exists
    const tagWithSameName = await prisma.tags.findFirst({
      where: {
        tagName,
        NOT: {
          id,
        },
      },
    });

    if (tagWithSameName) {
      throw new CustomError("Tag name already in use", 400);
    }

    const updatedTag = await prisma.tags.update({
      where: { id },
      data: { tagName },
    });

    res.status(200).json({
      success: true,
      data: updatedTag,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogsByTag = async (req, res, next) => {
  const { tagName } = req.params;
  const { s = 0, t = 10 } = req.query; // Pagination parameters
  
  try {
      const blogs = await prisma.blog.findMany({
          skip: parseInt(s),
          take: parseInt(t),
          where: {
              status: "PUBLISHED",
              tags: {
                  some: {
                      tagName: {
                          equals: tagName,
                          mode: 'insensitive'
                      }
                  }
              }
          },
          include: {
              tags: {
                  select: {
                      id: true,
                      tagName: true
                  }
              },
              _count: {
                  select: {
                      comments: true,
                      likedBy: true
                  }
              }
          },
          orderBy: {
              createdAt: "desc"
          }
      });

      res.status(200).json({
          success: true,
          data: blogs,
          count: blogs.length,
          tag: tagName
      });
  } catch (error) {
      console.error("Error fetching blogs by tag:", error);
      next(new CustomError("Failed to fetch blogs by tag", 500));
  }
};