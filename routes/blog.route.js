import express from "express"
import { testBlog, addBlog} from "../controllers/blog controller/blog.controller.js";

const blogRoute = express.Router();

blogRoute.get('/test', testBlog);
blogRoute.post('/add', addBlog);

export default blogRoute;