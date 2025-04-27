import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient, Prisma } from "../../prisma/generated/postgres/index.js";
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
        if (blog.authorId !== userId && req.user.role !== "ADMIN" && req.user.role !== "SUPER_ADMIN") {
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
      if (blog.authorId !== userId && req.user.role !== "ADMIN" && req.user.role !== "SUPER_ADMIN") {
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

/** * Get related blogs*/
export const getRelatedBlogs = async (req, res, next) => {
  const { id } = req.params;
  const MAX_BLOGS = 6; // Maximum number of blogs to return
  
  try {
    // First, find the current blog and its tags with a single optimized query
    const currentBlog = await postgresPrisma.blog.findUnique({
      where: { id },
      select: {
        id: true,
        tags: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!currentBlog) {
      return next(new CustomError("Blog not found", 404));
    }

    // Extract tag IDs from the current blog
    const tagIds = currentBlog.tags.map(tag => tag.id);
    let relatedBlogs = [];
    let message = "";

    // Only attempt to find tag-related blogs if there are tags
    if (tagIds.length > 0) {
      try {
        // Find blogs with the most matching tags first - using groupBy and count
        // Convert the tags array to SQL array format
        const tagIdsForQuery = Prisma.join(tagIds);
        
        relatedBlogs = await postgresPrisma.$queryRaw`
          SELECT b.*, COUNT(bt."tagId") as tag_match_count
          FROM "Blog" b
          JOIN "_BlogToTags" bt ON b.id = bt."blogId"
          WHERE b.id != ${id}
          AND b.status = 'PUBLISHED'
          AND bt."tagId" IN (${Prisma.raw(tagIdsForQuery)})
          GROUP BY b.id
          ORDER BY tag_match_count DESC, b."viewCount" DESC
          LIMIT ${MAX_BLOGS}
        `;
        
        // If we found related blogs based on tags
        if (relatedBlogs.length > 0) {
          // Fetch additional data needed for each blog (tags, counts) in a single batch
          const blogIds = relatedBlogs.map(blog => blog.id);
          
          const [tagsForBlogs, commentCounts, likeCounts] = await Promise.all([
            // Get tags for all blogs in a single query
            postgresPrisma.tags.findMany({
              where: {
                blogs: {
                  some: {
                    id: { in: blogIds }
                  }
                }
              },
              include: {
                blogs: {
                  where: {
                    id: { in: blogIds }
                  },
                  select: { id: true }
                }
              }
            }),
            
            // Get comment counts for all blogs in a single query
            postgresPrisma.comment.groupBy({
              by: ['blogId'],
              where: { blogId: { in: blogIds } },
              _count: true
            }),
            
            // Get like counts for all blogs in a single query
            postgresPrisma.likedBlog.groupBy({
              by: ['blogId'],
              where: { blogId: { in: blogIds } },
              _count: true
            })
          ]);
          
          // Process and enrich the blogs with the fetched data
          relatedBlogs = relatedBlogs.map(blog => {
            // Add tags
            const blogTags = tagsForBlogs.filter(tag => 
              tag.blogs.some(b => b.id === blog.id)
            ).map(({ id, tagName }) => ({ id, tagName }));
            
            // Add counts
            const commentCount = commentCounts.find(c => c.blogId === blog.id)?._count || 0;
            const likeCount = likeCounts.find(c => c.blogId === blog.id)?._count || 0;
            
            return {
              ...blog,
              tags: blogTags,
              _count: {
                comments: commentCount,
                likedBy: likeCount
              }
            };
          });
          
          message = "Related blogs fetched successfully based on matching tags";
        }
      } catch (error) {
        console.error("Error in tag-based blog query:", error);
        // If the tag query fails, continue with the fallback strategy
        relatedBlogs = [];
      }
    }

    // If we don't have enough related blogs from tags, get popular blogs to fill the gap
    if (relatedBlogs.length < MAX_BLOGS) {
      const remainingCount = MAX_BLOGS - relatedBlogs.length;
      const existingIds = relatedBlogs.map(blog => blog.id);
      
      const popularBlogs = await postgresPrisma.blog.findMany({
        where: {
          id: { 
            not: id,  // Exclude current blog
            notIn: existingIds.length > 0 ? existingIds : undefined // Exclude already fetched blogs if any
          },
          status: "PUBLISHED"
        },
        include: {
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
        },
        orderBy: {
          viewCount: "desc"  // Get most viewed blogs
        },
        take: remainingCount
      });
      
      // Combine the results
      relatedBlogs = [...relatedBlogs, ...popularBlogs];
      
      if (tagIds.length > 0 && popularBlogs.length > 0) {
        message = `${message}, supplemented with popular blogs`;
      } else if (tagIds.length === 0) {
        message = "No tags found for this blog, showing popular blogs instead";
      } else if (relatedBlogs.length === 0) {
        message = "No related blogs found, showing popular blogs instead";
      }
    }
    
    // Shuffle the results to add variety, then limit to MAX_BLOGS
    // Fisher-Yates shuffle algorithm
    for (let i = relatedBlogs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [relatedBlogs[i], relatedBlogs[j]] = [relatedBlogs[j], relatedBlogs[i]];
    }
    
    // Ensure we don't exceed MAX_BLOGS
    const limitedBlogs = relatedBlogs.slice(0, MAX_BLOGS);

    res.status(200).json({
      success: true,
      data: limitedBlogs,
      count: limitedBlogs.length,
      message: message
    });
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    next(new CustomError("Failed to fetch related blogs", 500));
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