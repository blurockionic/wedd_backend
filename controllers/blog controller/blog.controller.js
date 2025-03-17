import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

/**
 * Fetch all blogs
 */
export const getBlogs = async (req, res, next) => {
    try {
        const blogs = await postgresPrisma.blog.findMany({
            include: { author: true, comments: true, likes: true }
        });
        res.status(200).json({ success: true, data: blogs });
    } catch (error) {
        next(new CustomError("Failed to fetch blogs", 500));
    }
};

/**
 * Fetch a single blog by ID
 */
export const getBlogById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const blog = await postgresPrisma.blog.findUnique({
            where: { id: Number(id) },
            include: { author: true, comments: true, likes: true }
        });
        if (!blog) {
            return next(new CustomError("Blog not found", 404));
        }
        res.status(200).json({ success: true, data: blog });
    } catch (error) {
        next(new CustomError("Failed to fetch blog", 500));
    }
};

/**
 * Add a new blog
 */
export const addBlog = async (req, res, next) => {
    const { title, tags, content } = req.body;
    const authorId = req.user.id; // Get user ID from authentication middleware

    try {
        const newBlog = await postgresPrisma.blog.create({
            data: { title, tags, content, authorId }
        });
        res.status(201).json({ success: true, data: newBlog });
    } catch (error) {
        console.log(error.message); 
        next(new CustomError("Failed to add new blog", 500));
    }
};

/**
 * Update a blog
 */
export const updateBlog = async (req, res, next) => {
    const { id } = req.params;
    const { title, tags, content } = req.body;
    const userId = req.user.id; // Get user ID from authentication middleware

    try {
        const blog = await postgresPrisma.blog.findUnique({ where: { id: Number(id) } });
        if (!blog) return next(new CustomError("Blog not found", 404));

        // Only allow the author or an admin to update
        if (blog.authorId !== userId && req.user.role !== "ADMIN") {
            return next(new CustomError("Unauthorized to update this blog", 403));
        }

        const updatedBlog = await postgresPrisma.blog.update({
            where: { id: Number(id) },
            data: { title, tags, content }
        });

        res.status(200).json({ success: true, data: updatedBlog });
    } catch (error) {
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
        const blog = await postgresPrisma.blog.findUnique({ where: { id: Number(id) } });
        if (!blog) return next(new CustomError("Blog not found", 404));

        if (blog.authorId !== userId && req.user.role !== "ADMIN") {
            return next(new CustomError("Unauthorized to delete this blog", 403));
        }

        await postgresPrisma.blog.delete({ where: { id: Number(id) } });
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        next(new CustomError("Failed to delete blog", 500));
    }
};

/**
 * Like a blog
 */
export const likeBlog = async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        const existingLike = await postgresPrisma.blogLike.findUnique({
            where: { userId_blogId: { userId, blogId: Number(id) } }
        });

        if (existingLike) {
            return next(new CustomError("You have already liked this blog", 400));
        }

        await postgresPrisma.blogLike.create({ data: { userId, blogId: Number(id) } });
        res.status(200).json({ success: true, message: "Blog liked" });
    } catch (error) {
        next(new CustomError("Failed to like blog", 500));
    }
};

/**
 * Unlike a blog
 */
export const unlikeBlog = async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        const existingLike = await postgresPrisma.blogLike.findUnique({
            where: { userId_blogId: { userId, blogId: Number(id) } }
        });

        if (!existingLike) {
            return next(new CustomError("You haven't liked this blog", 400));
        }

        await postgresPrisma.blogLike.delete({
            where: { userId_blogId: { userId, blogId: Number(id) } }
        });

        res.status(200).json({ success: true, message: "Blog unliked" });
    } catch (error) {
        next(new CustomError("Failed to unlike blog", 500));
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
            data: { content, authorId, blogId: Number(id) }
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
        const comment = await postgresPrisma.comment.findUnique({ where: { id: Number(commentId) } });
        if (!comment) return next(new CustomError("Comment not found", 404));

        if (comment.authorId !== userId && req.user.role !== "ADMIN") {
            return next(new CustomError("Unauthorized to delete this comment", 403));
        }

        await postgresPrisma.comment.delete({ where: { id: Number(commentId) } });
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        next(new CustomError("Failed to delete comment", 500));
    }
};

/**
 * Function to view all comments for a blog post
 */
export const getBlogCommentsById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const comment = await postgresPrisma.comment.findMany({
            where: { blogId: Number(id) },
            include: { author: { select: { id: true, name: true, email: true } } }, // Include author details
            orderBy: { createdAt: "desc" } // Order by latest comment
        });
        res.status(200).json({ success: true, data: comment });
    } catch {
        next(new CustomError("Failed to fetch comments", 500));
    }
};
