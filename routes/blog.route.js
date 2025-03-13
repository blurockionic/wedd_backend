import express from "express"
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { testBlog, addBlog, getBlogs, getBlogById, updateBlog, deleteBlog, likeBlog, unlikeBlog, addComment, deleteComment } from "../controllers/blog controller/blog.controller.js";

const blogRoute = express.Router();

blogRoute.use(jwtAuthentication, roleMiddleware(["ADMIN"]));

blogRoute.get('/test', testBlog);
blogRoute.post('/add', addBlog);
blogRoute.get('/', getBlogs);
blogRoute.get('/:id', getBlogById);
blogRoute.put('/:id', updateBlog);
blogRoute.delete('/:id', deleteBlog);

blogRoute.post('/:id/like', likeBlog);
blogRoute.post('/:id/unlike', unlikeBlog);
blogRoute.post('/:id/comment', addComment);
blogRoute.delete('/:id/comment/:commentId', deleteComment);

export default blogRoute;