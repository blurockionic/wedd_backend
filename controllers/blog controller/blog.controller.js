import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

export const testBlog = async (req, res, next) => {
    try {
        const blogs = await postgresPrisma.blog.findMany();
        res.status(200).json({
            success: true,
            data: blogs
        });
    } catch (error) {
        next(new CustomError('Failed to fetch blogs', 200));
    }
};

export const addBlog = async (req, res, next) => {
    const { title, tags, content , authorId} = req.body;
    try {
        const newBlog = await postgresPrisma.blog.create({
            data: {
                title,
                tags,
                content,
                authorId
            }
        });
        res.status(201).json({
            success: true,
            data: newBlog
        });
    } catch (error) {
        console.log(error.message);
        next(new CustomError('Failed to add new blog', 500));
    }
};

export const getBlogs = async (req, res, next) => {
    try {
        const blogs = await postgresPrisma.blog.findMany();
        res.status(200).json({
            success: true,
            data: blogs
        });
    } catch (error) {
        next(new CustomError('Failed to fetch blogs', 500));
    }
};

export const getBlogById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const blog = await postgresPrisma.blog.findUnique({
            where: { id: Number(id) }
        });
        if (!blog) {
            return next(new CustomError('Blog not found', 404));
        }
        res.status(200).json({
            success: true,
            data: blog
        });
    } catch (error) {
        next(new CustomError('Failed to fetch blog', 500));
    }
};

export const updateBlog = async (req, res, next) => {
    const { id } = req.params;
    const { title, tags, content, authorId } = req.body;
    try {
        const updatedBlog = await postgresPrisma.blog.update({
            where: { id: Number(id) },
            data: { title, tags, content, authorId }
        });
        res.status(200).json({
            success: true,
            data: updatedBlog
        });
    } catch (error) {
        next(new CustomError('Failed to update blog', 500));
    }
};

export const deleteBlog = async (req, res, next) => {
    const { id } = req.params;
    try {
        await postgresPrisma.blog.delete({
            where: { id: Number(id) }
        });
        res.status(204).json({
            success: true,
            data: null
        });
    } catch (error) {
        next(new CustomError('Failed to delete blog', 500));
    }
};

export const likeBlog = async (req, res, next) => {
    const { id } = req.params;
    try {
        const blog = await postgresPrisma.blog.update({
            where: { id: Number(id) },
            data: {
                likes: {
                    increment: 1
                }
            }
        });
        res.status(200).json({
            success: true,
            data: blog
        });
    } catch (error) {
        next(new CustomError('Failed to like blog', 500));
    }
};

export const unlikeBlog = async (req, res, next) => {
    const { id } = req.params;
    try {
        const blog = await postgresPrisma.blog.update({
            where: { id: Number(id) },
            data: {
                likes: {
                    decrement: 1
                }
            }
        });
        res.status(200).json({
            success: true,
            data: blog
        });
    } catch (error) {
        next(new CustomError('Failed to unlike blog', 500));
    }
};

export const addComment = async (req, res, next) => {
    const { id } = req.params;
    const { content, authorId } = req.body;
    try {
        const comment = await postgresPrisma.comment.create({
            data: {
                content,
                authorId,
                blogId: Number(id)
            }
        });
        res.status(201).json({
            success: true,
            data: comment
        });
    } catch (error) {
        next(new CustomError('Failed to add comment', 500));
    }
};

export const deleteComment = async (req, res, next) => {
    const { id, commentId } = req.params;
    try {
        await postgresPrisma.comment.delete({
            where: { id: Number(commentId) }
        });
        res.status(204).json({
            success: true,
            data: null
        });
    } catch (error) {
        next(new CustomError('Failed to delete comment', 500));
    }
};