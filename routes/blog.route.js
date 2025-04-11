import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import * as bc from "../controllers/blogController/blog.controller.js";
import * as btc from "../controllers/blogController/tags.blog.controller.js";
import * as buc from "../controllers/blogController/utils.blog.controller.js";

const blogRouteAdmin = express.Router();
const blogRouteUser = express.Router();
const blogRoutePublic = express.Router();

// 🚀 **Public Routes** (Accessible without authentication)
{
    blogRoutePublic.get("/blogs", bc.getBlogs);
    blogRoutePublic.get("/blogs/:urlTitle", bc.getBlogByUrlTitle);
    blogRoutePublic.get("/tags", btc.getAllTagsWithBlogInfo);
    blogRoutePublic.get("/tags/:tagName", btc.getTagByName);
    blogRoutePublic.get("/blogs/tag/:tagName", btc.getBlogsByTag);
    blogRoutePublic.get("/blog-count", buc.getBlogCount);
}

// 🔒 **Admin Routes** (Only accessible by authenticated ADMIN users)
{
    blogRouteAdmin.use(jwtAuthentication, roleMiddleware(["ADMIN", "SUPER_ADMIN"]));
    blogRouteAdmin.get("/blogs", bc.getBlogs);
    blogRouteAdmin.post("/blogs", bc.addBlog);
    blogRouteAdmin.patch("/blogs/:id",bc.uploadCoverImageMiddleware , bc.updateBlog);
    blogRouteAdmin.delete("/blogs/:id", bc.deleteBlog);
    blogRouteAdmin.get("/blogs/:urlTitle", bc.getBlogByUrlTitle);
    // Blog-tags routes
    blogRouteUser.get("/tags/:tagName", btc.getTagByName);
    blogRouteUser.get("/tags", btc.getAllTagsWithBlogInfo);
    blogRouteUser.get("/blogs/tag/:tagName", btc.getBlogsByTag);
    blogRouteAdmin.post("/tags", btc.addTag);
    blogRouteAdmin.delete("/tags", btc.deleteTag);
    blogRouteAdmin.put("/tags/:id", btc.updateTag);
}

// 🔑 **User Routes** (Only authenticated users can interact)
{
    blogRouteUser.use(jwtAuthentication);
    blogRouteUser.post("/blogs/:id/comments", buc.addComment);
    blogRouteUser.delete("/blogs/comments/:commentId", buc.deleteComment);
    blogRouteUser.post("/blogs/:id/like", buc.toggleLikeBlog);
    blogRouteUser.get("/blogs/search", bc.searchBlogs);
}

export { blogRouteAdmin, blogRouteUser, blogRoutePublic };