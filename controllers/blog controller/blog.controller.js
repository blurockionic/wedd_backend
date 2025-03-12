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
    const { title, tags, content, authorId } = req.body;
    try {
        const newBlog = await postgresPrisma.blog.findMany({
            // data: {
            //     title,
            //     tags,
            //     content,
            //     authorId
            // }
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