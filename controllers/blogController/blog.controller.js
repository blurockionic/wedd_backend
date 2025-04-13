import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
import slugify from "slugify";
import upload from "../../middleware/multer.middleware.js";

const postgresPrisma = new PostgresClient();

// get blogs - all, posted, archived 
export const getBlogs = async (req, res, next) => {
    try {
      const { tag, status = "ALL", s = 0, t = 10 } = req.query;
  
      const whereClause = {
        ...(status !== "ALL" && {
          status: status.toUpperCase(), // Must match enum values: PUBLISHED, DRAFT
        }),
        ...(tag && {
          tags: {
            some: {
              tagName: {
                contains: tag,
                mode: "insensitive",
              },
            },
          },
        }),
      };
  
      // First, get the total count of blogs matching the criteria
      const totalCount = await postgresPrisma.blog.count({
        where: whereClause
      });
      
      // Then get the paginated blogs
      const blogs = await postgresPrisma.blog.findMany({
        skip: parseInt(s),
        take: parseInt(t),
        where: whereClause,
        select: {
          id: true,
          title: true,
          coverImage: true,
          urlTitle: true,
          status: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          viewCount: true,
          likes: true,
          authorId: true,
          tags: {
            select: {
              id: true,
              tagName: true,
            },
          },
          _count: {
            select: {
              comments: true,
              likedBy: true,
            },
          },
          // ⚠️ Excludes: content
        },
        orderBy: {
          createdAt: "desc",
        },
      });
  
      res.status(200).json({
        success: true,
        data: blogs,
        count: blogs.length,
        totalCount: totalCount
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      next(new CustomError("Failed to fetch blogs", 500));
    }
};
// Add a new blog with tags
export const addBlog = async (req, res, next) => {
    const { title, content, status = "PUBLISHED" } = req.body;
    const tags = req.body.tags ? JSON.parse(req.body.tags) : [];
    const authorId = req.user.id;
    
    if (!title || !content) {
        return next(new CustomError("Title and content are required", 400));
    }

    const urlTitle = slugify(title, { lower: true, strict: true });

    try {
        // Handle cover image upload
        let coverImage;
        if (req.file) {
          coverImage = req.file.path; // Multer saves the file and provides the path
        } else {
          coverImage = req.body.coverImage;
        }

        // Handle tags - create new ones or connect to existing ones
        const tagConnections = await Promise.all(
            tags.map(async (tagName) => {
                const normalizedTagName = tagName.trim().toLowerCase();
                const existingTag = await postgresPrisma.tags.findFirst({ 
                    where: { 
                        tagName: {
                            equals: normalizedTagName,
                            mode: 'insensitive'
                        }
                    } 
                });
                
                if (existingTag) return { id: existingTag.id };
                
                const newTag = await postgresPrisma.tags.create({ 
                    data: { 
                        tagName: normalizedTagName 
                    } 
                });
                
                return { id: newTag.id };
            })
        );

        const newBlog = await postgresPrisma.blog.create({
            data: {
                title,
                content,
                urlTitle,
                coverImage,
                authorId,
                status,
                tags: { connect: tagConnections }
            },
            include: { 
                tags: {
                    select: {
                        id: true,
                        tagName: true
                    }
                }
            }
        });

        res.status(201).json({ 
            success: true, 
            data: newBlog,
            message: "Blog created successfully"
        });
    } catch (error) {
        console.error("Error creating blog:", error);
        next(new CustomError("Failed to add new blog", 500));
    }
};
/** * Delete a blog and its associated tags (disconnect only, don't delete tags)*/
export const deleteBlog = async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        const blog = await postgresPrisma.blog.findUnique({ 
            where: { id },
            include: {
                tags: true
            }
        });
        
        if (!blog) return next(new CustomError("Blog not found", 404));

        // Authorization check
        if (blog.authorId !== userId || req.user.role !== "ADMIN") {
            return next(new CustomError("Unauthorized to delete this blog", 403));
        }

        // Delete all associated comments, likes, and disconnect tags
        await postgresPrisma.$transaction([
            postgresPrisma.comment.deleteMany({ where: { blogId: id } }),
            postgresPrisma.likedBlog.deleteMany({ where: { blogId: id } }),
            postgresPrisma.blog.update({
                where: { id },
                data: {
                    tags: {
                        set: []
                    }
                }
            }),
            postgresPrisma.blog.delete({ where: { id } })
        ]);

        res.status(204).json({ 
            success: true, 
            data: null,
            message: "Blog deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting blog:", error);
        next(new CustomError("Failed to delete blog", 500));
    }
}; 

//get blog by url title!
export const getBlogByUrlTitle = async (req, res, next) => {
  const { urlTitle } = req.params;

  try {
    // Find blog by urlTitle
    const existingBlog = await postgresPrisma.blog.findUnique({
      where: { urlTitle },
    });

    if (!existingBlog) {
      return next(new CustomError("Blog not found", 404));
    }

    // Increment view count and fetch blog details
    const blog = await postgresPrisma.blog.update({
      where: { id: existingBlog.id },
      data: {
        viewCount: { increment: 1 },
      },
      include: {
        comments: {
          orderBy: { createdAt: 'desc' },
        },
        tags: true,
        likedBy: {
          select: {
            userId: true,
          },
        },
      },
    });

    // Fetch user details for each comment based on authorId
    const enrichedComments = await Promise.all(
      blog.comments.map(async (comment) => {
        const author = await postgresPrisma.user.findUnique({
          where: { id: comment.authorId },
          select: {
            user_name: true,
            profile_photo: true,
          },
        });

        return {
          ...comment,
          author,
        };
      })
    );

    res.status(200).json({
      success: true,
      data: {
        ...blog,
        comments: enrichedComments,
        likeCount: blog.likedBy.length,
        commentCount: blog.comments.length,
      },
    });

  } catch (error) {
    console.error("Error fetching blog by urlTitle:", error);
    next(new CustomError("Failed to fetch blog", 500));
  }
};

// get blog by id
export const getBlogById = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    try {
        const blog = await postgresPrisma.blog.findFirst({
            where: { id: id },
            include: {
                tags: true,      
                comments: true  
            }
        });

        if (!blog) {
            return next(new CustomError("Blog not found", 404));
        }

        res.status(200).json({
            success: true,       
            data: {             
                ...blog,       
            }
        });
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        next(new CustomError("Failed to fetch blog by ID", 500));
    }
}

// get count of blog - all, published, draft
export const getBlogCounts = async (req, res, next) => {
    try {
        const { type } = req.query; // 'type' can be 'PUBLISHED', 'DRAFT', or undefined for all blogs

        const whereClause = type ? { status: type.toUpperCase() } : {};

        const totalCount = await postgresPrisma.blog.count();
        const filteredCount = await postgresPrisma.blog.count({ where: whereClause });

        res.status(200).json({
            success: true,
            totalBlogs: totalCount,
            filteredBlogs: filteredCount,
            message: `Count of ${type || "all"} blogs retrieved successfully.`,
        });
    } catch (error) {
        console.error("Error fetching blog counts:", error);
        next(new CustomError("Failed to fetch blog counts", 500));
    }
};
/** * Update a blog and its tags*/
export const updateBlog = async (req, res, next) => {
    const { id } = req.params;
    const { title, content, status, coverImage, toggleStatus } = req.body;
    const tags = req.body.tags ? JSON.parse(req.body.tags) : [];
    const userId = req.user.id;
  
    try {
      const blog = await postgresPrisma.blog.findUnique({
        where: { id },
        include: {
          tags: {
            select: {
              id: true,
              tagName: true,
            },
          },
        },
      });
  
      if (!blog) return next(new CustomError("Blog not found", 404));
  
      // Authorization check
      if (blog.authorId !== userId && req.user.role !== "ADMIN") {
        return next(new CustomError("Unauthorized to update this blog", 403));
      }
  
      // If only toggleStatus is requested
      if (toggleStatus === true) {
        const newStatus = blog.status === "published" ? "draft" : "published";
  
        const updatedBlog = await postgresPrisma.blog.update({
          where: { id },
          data: { status: newStatus },
        });
  
        return res.status(200).json({
          success: true,
          data: updatedBlog,
          message: `Blog status updated to ${updatedBlog.status}.`,
        });
      }
  
      // Prepare update data
      const updateData = {};
      if (title) {
        updateData.title = title;
        updateData.urlTitle = slugify(title, { lower: true, strict: true });
      }
      if (content) updateData.content = content;
      if (status) updateData.status = status;
  
      // Handle cover image
      if (req.file) {
        updateData.coverImage = req.file.path;
      } else if (coverImage) {
        updateData.coverImage = coverImage;
      }
  
      // Handle tags if provided
      if (tags.length > 0) {
        const tagConnections = await Promise.all(
          tags.map(async (tagName) => {
            const normalized = tagName.trim().toLowerCase();
            const existingTag = await postgresPrisma.tags.findFirst({
              where: {
                tagName: {
                  equals: normalized,
                  mode: "insensitive",
                },
              },
            });
  
            if (existingTag) return { id: existingTag.id };
  
            const newTag = await postgresPrisma.tags.create({
              data: { tagName: normalized },
            });
  
            return { id: newTag.id };
          })
        );
  
        // Disconnect current tags
        await postgresPrisma.blog.update({
          where: { id },
          data: { tags: { set: [] } },
        });
  
        updateData.tags = {
          connect: tagConnections,
        };
      }
  
      // Final update
      const updatedBlog = await postgresPrisma.blog.update({
        where: { id },
        data: updateData,
        include: {
          tags: {
            select: {
              id: true,
              tagName: true,
            },
          },
        },
      });
  
      res.status(200).json({
        success: true,
        data: updatedBlog,
        message: "Blog updated successfully",
      });
    } catch (error) {
      console.error("Error updating blog:", error);
      next(new CustomError("Failed to update blog", 500));
    }
};

// ------------------------------------------------------------------------------------------------------

/** * Search blogs by title or content */
export const searchBlogs = async (req, res, next) => {
  const { query, s = 0, t = 10 } = req.query; // Pagination parameters
  const userRole = req.user.role;

  if (!query) {
    return next(new CustomError("Search query is required", 400));
  }

  try {
    const whereClause = {
      ...(userRole === "ADMIN" || userRole === "SUPER_ADMIN"
        ? {} // No restriction for admin or super admin
        : { status: "PUBLISHED" }), // Restrict to published blogs for public or user roles
      OR: [
        {
          title: {
            contains: query,
            mode: 'insensitive'
          }
        },
        {
          content: {
            contains: query,
            mode: 'insensitive'
          }
        }
      ]
    };

    const blogs = await postgresPrisma.blog.findMany({
      skip: parseInt(s),
      take: parseInt(t),
      where: whereClause,
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
      query
    });
  } catch (error) {
    console.error("Error searching blogs:", error);
    next(new CustomError("Failed to search blogs", 500));
  }
};



// Middleware for handling single file upload for cover image
export const uploadCoverImageMiddleware = upload.single("coverImage");