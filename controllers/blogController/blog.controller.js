import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
import slugify from "slugify";

const postgresPrisma = new PostgresClient();

/** Fetch all blogs with their tags*/
export const getBlogs = async (req, res, next) => {
    try {
        const { tag } = req.query; // Optional tag filter
        
        const whereClause = {
            // status: "PUBLISHED", // Only show published blogs by default
            ...(tag && {
                tags: {
                    some: {
                        tagName: {
                            contains: tag,
                            mode: 'insensitive'
                        }
                    }
                }
            })
        };

        const blogs = await postgresPrisma.blog.findMany({
            skip: req.query.s,
            take: req.body.t,
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
            count: blogs.length
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        next(new CustomError("Failed to fetch blogs", 500));
    }
};
/** Fetch only published blogs */
export const getPublishedBlogs = async (req, res, next) => {
    try {
        const { s = 0, t = 10 } = req.query; // Pagination parameters
        const blogs = await postgresPrisma.blog.findMany({
            skip: parseInt(s),
            take: parseInt(t),
            where: { status: "PUBLISHED" },
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
            count: blogs.length
        });
    } catch (error) {
        console.error("Error fetching published blogs:", error);
        next(new CustomError("Failed to fetch published blogs", 500));
    }
};

/** * Add a new blog with tags*/
export const addBlog = async (req, res, next) => {
    const { title, tags = [], content, coverImage, status = "PUBLISHED" } = req.body;
    const authorId = req.user.id;
    
    if (!title || !content) {
        return next(new CustomError("Title and content are required", 400));
    }

    const urlTitle = slugify(title, { lower: true, strict: true });

    try {
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
/** * Update a blog and its tags*/
export const updateBlog = async (req, res, next) => {
    const { id } = req.params;
    const { title, tags = [], content, status, coverImage } = req.body;
    const userId = req.user.id;
  
    try {
        const blog = await postgresPrisma.blog.findUnique({
            where: { id },
            include: { 
                tags: {
                    select: {
                        id: true,
                        tagName: true
                    }
                }
            }
        });

        if (!blog) return next(new CustomError("Blog not found", 404));
        
        // Authorization check
        if (blog.authorId !== userId && req.user.role !== "ADMIN") {
            return next(new CustomError("Unauthorized to update this blog", 403));
        }
      
        // Update urlTitle if title is being changed
        const urlTitle = title ? slugify(title, { lower: true, strict: true }) : undefined;
        
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
                    data: { tagName: normalizedTagName }
                });
                
                return { id: newTag.id };
            })
        );

        // Disconnect all current tags first
        await postgresPrisma.blog.update({
            where: { id },
            data: {
                tags: {
                    set: []
                }
            }
        });

        const updatedBlog = await postgresPrisma.blog.update({
            where: { id },
            data: {
                title,
                content,
                urlTitle,
                status,
                coverImage,
                tags: {
                    connect: tagConnections
                }
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

        res.status(200).json({ 
            success: true, 
            data: updatedBlog,
            message: "Blog updated successfully"
        });
    } catch (error) {
        console.error("Error updating blog:", error);
        next(new CustomError("Failed to update blog", 500));
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
        if (blog.authorId !== userId && req.user.role !== "ADMIN") {
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
/** * Find a blog by its name */
export const getBlogByUrlTitle = async (req, res, next) => {
    const { urlTitle } = req.params;
    
    try {
        // First find the blog without incrementing to check if it exists
        const existingBlog = await postgresPrisma.blog.findUnique({
            where: { 
                urlTitle: urlTitle,
            }
        });

        if (!existingBlog) {
            return next(new CustomError("Blog not found", 404));
        }

        // Then update the view count and get the full blog data
        const blog = await postgresPrisma.blog.update({
            where: { id: existingBlog.id },
            data: { viewCount: { increment: 1 } },
            include: {
                author: {
                    select: {
                        id: true,
                        user_name: true,
                        profile_photo: true
                    }
                },
                tags: {
                    select: {
                        id: true,
                        tagName: true
                    }
                },
                comments: {
                    orderBy: { createdAt: "desc" },
                    include: {
                        author: {
                            select: {
                                id: true,
                                user_name: true,
                                profile_photo: true
                            }
                        }
                    }
                },
                _count: {
                    select: {
                        likedBy: true
                    }
                }
            }
        });

        res.status(200).json({
            success: true,
            data: blog
        });

    } catch (error) {
        console.error("Error fetching blog by urlTitle:", error);
        next(new CustomError("Failed to fetch blog", 500));
    }
}

export const getBlogsByTag = async (req, res, next) => {
    const { tagName } = req.params;
    const { s = 0, t = 10 } = req.query; // Pagination parameters
    
    try {
        const blogs = await postgresPrisma.blog.findMany({
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

/** * Search blogs by title or content */
export const searchBlogs = async (req, res, next) => {
    const { query, s = 0, t = 10 } = req.query; // Pagination parameters

    if (!query) {
        return next(new CustomError("Search query is required", 400));
    }

    try {
        const blogs = await postgresPrisma.blog.findMany({
            skip: parseInt(s),
            take: parseInt(t),
            where: {
                status: "PUBLISHED",
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
            query
        });
    } catch (error) {
        console.error("Error searching blogs:", error);
        next(new CustomError("Failed to search blogs", 500));
    }
};

// get blogs by id
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