import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import {
  addBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  toggleLikeBlog,
  addComment,
  deleteComment,
  getBlogCount,
  getTotalViewCount,
} from "../controllers/blog controller/blog.controller.js";

const blogRouteAdmin = express.Router();
const blogRouteUser = express.Router();
const blogRoutePublic = express.Router();

// 🚀 **Public Routes** (Accessible without authentication)
blogRoutePublic.get("/allBlog", getBlogs);
blogRoutePublic.get("/allBlog/:id", getBlogById);
blogRoutePublic.get("/blog_count", getBlogCount);
blogRoutePublic.get("/view_count", getTotalViewCount);

// // sample test route
// blogRoutePublic.post("/add", addBlog);

// 🔒 **Admin Routes** (Only accessible by authenticated ADMIN users)
blogRouteAdmin.use(jwtAuthentication, roleMiddleware(["ADMIN"]));
blogRouteAdmin.post("/add", addBlog);
blogRouteAdmin.get("/allBlog", getBlogs);
blogRouteAdmin.get("/allBlog/:id", getBlogById);
blogRouteAdmin.put("/allBlog/:id", updateBlog);
blogRouteAdmin.delete("/allBlog/:id", deleteBlog);
blogRouteAdmin.post("/allBlog/:id/comment", addComment);
blogRouteAdmin.post("/allBlog/:id/togglelike", toggleLikeBlog);
blogRouteAdmin.delete("/allBlog/:id/comment/:commentId", deleteComment);
blogRouteAdmin.get("/blog_count", getBlogCount);
blogRouteAdmin.get("/view_count", getTotalViewCount);

// 🔑 **User Routes** (Only authenticated users can interact)
blogRouteUser.use(jwtAuthentication);
blogRouteUser.get("/allBlog", getBlogs);
blogRouteUser.get("/allBlog/:id", getBlogById);
blogRouteUser.post("/allBlog/:id/togglelike", toggleLikeBlog);
blogRouteUser.post("/allBlog/:id/comment", addComment);
blogRouteUser.delete("/allBlog/:id/comment/:commentId", deleteComment);

export { blogRouteAdmin, blogRouteUser, blogRoutePublic };
