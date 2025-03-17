import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import {
  addBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  likeBlog,
  unlikeBlog,
  addComment,
  deleteComment,
  getBlogCommentsById
} from "../controllers/blog controller/blog.controller.js";

const blogRouteAdmin = express.Router();
const blogRouteUser = express.Router();
const blogRoutePublic = express.Router();  

// 🚀 Public Routes 
blogRoutePublic.get("/", getBlogs);  
blogRoutePublic.get("/:id", getBlogById);
blogRoutePublic.get("/:id/comments", getBlogCommentsById);  

// 🔒 Admin Routes 
blogRouteAdmin.use(jwtAuthentication, roleMiddleware(["ADMIN"]));

blogRouteAdmin.post("/add", addBlog);  
blogRouteAdmin.get("/", getBlogs);  
blogRouteAdmin.get("/:id", getBlogById);  
blogRouteAdmin.put("/:id", updateBlog);
blogRouteAdmin.delete("/:id", deleteBlog);
blogRouteAdmin.delete("/:id/comment/:commentId", deleteComment);

// 🔑 User Routes 
blogRouteUser.use(jwtAuthentication);

blogRouteUser.post("/:id/like", likeBlog);  
blogRouteUser.post("/:id/unlike", unlikeBlog);  
blogRouteUser.post("/:id/comment", addComment);  
blogRouteUser.delete("/:id/comment/:commentId", deleteComment);

export { blogRouteAdmin, blogRouteUser, blogRoutePublic };
