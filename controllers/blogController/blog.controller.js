import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
// import slugify from "slugify";

const postgresPrisma = new PostgresClient();

/**
 * Fetch all blogs
 */
export const getBlogs = async (req, res, next) => {
    try {
        const blogs = await postgresPrisma.Blog.findMany();
        res.status(200).json({ success: true, data: blogs });
    } catch (error) {
        console.log("error: ", error);
        next(new CustomError("Failed to fetch blogs", 500));
    }
};

/**
 * Fetch a single blog by ID
 */
export const getBlogById = async (req, res, next) => {
    const { id } = req.params;

    try {
        // Fetch and update the blog (increment view count)
        const blog = await postgresPrisma.blog.update({
            where: { id: id },
            data: { viewCount: { increment: 1 } },
            include: { 
                comments: { 
                    include: { 
                    }, 
                    orderBy: { createdAt: "desc" } 
                } 
            }
        });

        if (!blog) {
            return next(new CustomError("Blog not found", 404));
        }

        res.status(200).json({ success: true, data: blog });

    } catch (error) {
        console.error(error);
        next(new CustomError("Failed to fetch blog and comments", 500));
    }
};


/**
 * Add a new blog
 */
// export const addBlog = async (req, res, next) => {
//     const { title, tags, content, coverImage } = req.body;
//     const authorId = req.user.id; 
//     const slug = slugify(title, { lower: true, strict: true });

//     try {
//         const newBlog = await postgresPrisma.blog.create({
//             data: { title, tags, content, authorId, slug, coverImage }
//         });
//         res.status(201).json({ success: true, data: newBlog });
//     } catch (error) {
//         next(new CustomError("Failed to add new blog", 500));
//     }
// };
export const addBlog = async (req, res, next) => {
    const { title, tags, content } = req.body;
    // const authorId = req.user.id; 
    const authorId = "344"; 

    try {
        const newBlog = await postgresPrisma.blog.create({
            data: { title, tags, content, authorId }
        });
        res.status(201).json({ success: true, data: newBlog });
    } catch (error) {
        console.log(error);
        next(new CustomError("Failed to add new blog", 500));
    }
};

/**
 * Update a blog
 */
export const updateBlog = async (req, res, next) => {
    const { id } = req.params;
    const { title, tags, content } = req.body;
    const userId = req.user.id; 
    console.log("first")
    try {
        const blog = await postgresPrisma.blog.findUnique({ where: { id: (id) } });
        if (!blog) return next(new CustomError("Blog not found", 404));

        // Only allow the author or an admin to update
        if (blog.authorId !== userId && req.user.role !== "ADMIN") {
            return next(new CustomError("Unauthorized to update this blog", 403));
        }

        const updatedBlog = await postgresPrisma.blog.update({
            where: { id: (id) },
            data: { title, tags, content }
        });

        res.status(200).json({ success: true, data: updatedBlog });
    } catch (error) {
        console.log(error);
        next(new CustomError("Failed to update blog", 500));
    }
};

/**
 * Delete a blog
 */
export const deleteBlog = async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        const blog = await postgresPrisma.blog.findUnique({ where: { id: (id) } });
        if (!blog) return next(new CustomError("Blog not found", 404));

        if (blog.authorId !== userId && req.user.role !== "ADMIN") {
            return next(new CustomError("Unauthorized to delete this blog", 403));
        }

        await postgresPrisma.blog.delete({ where: { id: (id) } });
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        console.log(error.message());
        console.log(error.message())
        next(new CustomError("Failed to delete blog", 500));
    }
};

/**
 * Add a comment to a blog
 */
export const addComment = async (req, res, next) => {
    const { id } = req.params;
    const { content } = req.body;
    const authorId = req.user.id;

    try {
        const comment = await postgresPrisma.comment.create({
            data: { content, authorId, blogId: (id) }
        });

        res.status(201).json({ success: true, data: comment });
    } catch (error) {
        next(new CustomError("Failed to add comment", 500));
    }
};

/**
 * Delete a comment
 */
export const deleteComment = async (req, res, next) => {
    const { commentId } = req.params;
    const userId = req.user.id;

    try {
        const comment = await postgresPrisma.comment.findUnique({ where: { id: (commentId) } });
        if (!comment) return next(new CustomError("Comment not found", 404));

        if (comment.authorId !== userId && req.user.role !== "ADMIN") {
            return next(new CustomError("Unauthorized to delete this comment", 403));
        }

        await postgresPrisma.comment.delete({ where: { id: (commentId) } });
        res.status(204).json({ success: true, message: "Comment deleted", data: null });
    } catch (error) {
        next(new CustomError("Failed to delete comment", 500));
    }
};

/**
 * Toggle Like on a Blog
 */
export const toggleLikeBlog = async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        const existingLike = await postgresPrisma.likedBlog.findUnique({
            where: { userId_blogId: { userId, blogId: id } }
        });

        if (existingLike) {
            await postgresPrisma.likedBlog.delete({
                where: { userId_blogId: { userId, blogId: id } }
            });
            await postgresPrisma.blog.update({
                where: { id },
                data: { likes: { decrement: 1 } }
            });

            return res.status(200).json({ success: true, message: "Blog unliked", liked: false });
        }

        await postgresPrisma.likedBlog.create({ data: { userId, blogId: id } });

        await postgresPrisma.blog.update({
            where: { id },
            data: { likes: { increment: 1 } }
        });

        res.status(200).json({ success: true, message: "Blog liked", liked: true });
    } catch (error) {
        console.log(error);
        next(new CustomError("Failed to toggle like on blog", 500));
    }
};
/**
 * Get blog count
 */
export const getBlogCount = async (req, res, next) => {
    try {
        const blogCount = await postgresPrisma.blog.count();
        res.status(200).json({ success: true, data: { blogCount } });
    } catch (error) {
        console.log(error);
        next(new CustomError("Failed to fetch blog count", 500));
    }
};

/**
 * Get total view count
 */
export const getTotalViewCount = async (req, res, next) => {
    try {
        const totalViewCount = await postgresPrisma.blog.aggregate({
            _sum: {
                viewCount: true
            }
        });

        res.status(200).json({
            success: true,
            data: { totalViewCount: totalViewCount._sum.viewCount || 0 }
        });
    } catch (error) {
        console.log(error);
        next(new CustomError("Failed to fetch total view count", 500));
    }
};