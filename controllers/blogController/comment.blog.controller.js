import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
import slugify from "slugify";

const postgresPrisma = new PostgresClient();


/**
 * Add a comment to a blog
 */
export const addComment = async (req, res, next) => {
    const { id } = req.params;
    const { content } = req.body;
    const authorId = req.user.id;

    try {
        const blog = await postgresPrisma.blog.findUnique({ where: { id } });
        if (!blog) return next(new CustomError("Blog not found", 404));

        const comment = await postgresPrisma.comment.create({
            data: { 
                content, 
                authorId, 
                blogId: id 
            }
        });

        res.status(201).json({ success: true, data: comment });
    } catch (error) {
        console.error(error);
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
        const comment = await postgresPrisma.comment.findUnique({ 
            where: { id: commentId } 
        });
        
        if (!comment) return next(new CustomError("Comment not found", 404));

        if (comment.authorId !== userId && req.user.role !== "ADMIN") {
            return next(new CustomError("Unauthorized to delete this comment", 403));
        }

        await postgresPrisma.comment.delete({ where: { id: commentId } });
        res.status(204).json({ success: true, message: "Comment deleted", data: null });
    } catch (error) {
        console.error(error);
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
        const blog = await postgresPrisma.blog.findUnique({ where: { id } });
        if (!blog) return next(new CustomError("Blog not found", 404));
      
        // Check if user already liked the blog
        const existingLike = await postgresPrisma.likedBlog.findFirst({
            where: { 
                userId,
                blogId: id 
            }
        });

        if (existingLike) {
            // Unlike the blog
            await postgresPrisma.likedBlog.delete({
                where: { id: existingLike.id }
            });
            
            await postgresPrisma.blog.update({
                where: { id },
                data: { likes: { decrement: 1 } }
            });

            return res.status(200).json({ success: true, message: "Blog unliked", liked: false });
        }

        // Like the blog
        await postgresPrisma.likedBlog.create({ 
            data: { 
                userId, 
                blogId: id 
            } 
        });

        await postgresPrisma.blog.update({
            where: { id },
            data: { likes: { increment: 1 } }
        });

        res.status(200).json({ success: true, message: "Blog liked", liked: true });
    } catch (error) {
        console.error(error);
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
        console.error(error);
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
        console.error(error);
        next(new CustomError("Failed to fetch total view count", 500));
    }
};

export const testRoute = async(req, res, next) => {
    return res.status(200).json({ success: true, message: "Blog unliked" });
}
