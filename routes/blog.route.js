import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import * as bc from "../controllers/blogController/blog.controller.js";
import * as btc from "../controllers/blogController/tags.blog.controller.js";
import * as buc from "../controllers/blogController/utils.blog.controller.js";

const blogRouteAdmin = express.Router();
const blogRouteUser = express.Router();
const blogRoutePublic = express.Router();


// 🚀 **Public Routes** (No authentication required)
{
    blogRoutePublic.get("/", bc.getBlogs);
    blogRoutePublic.get("/:urlTitle", bc.getBlogByUrlTitle);

    // Tags-related
    blogRoutePublic.get("/tags", btc.getAllTagsWithBlogInfo);
    blogRoutePublic.get("/tags/:tagName", btc.getTagByName);
    blogRoutePublic.get("/tag/:tagName", btc.getBlogsByTag);

    // Stats
    blogRoutePublic.get("/blog-count", buc.getBlogCount); // All, draft, published
}


// 🔒 **Admin Routes** (Authenticated ADMIN / SUPER_ADMIN only)
{
    blogRouteAdmin.use(jwtAuthentication, roleMiddleware(["ADMIN", "SUPER_ADMIN"]));
    
    // Stats
    blogRouteAdmin.get("/blog-count/:status?", buc.getBlogCount); //✅
    blogRouteAdmin.get("/viewCount", buc.getTotalViewCount); //✅

    // Blog CRUD
    blogRouteAdmin.get("/", bc.getBlogs);
    blogRouteAdmin.post("/", bc.uploadCoverImageMiddleware, bc.addBlog);
    blogRouteAdmin.patch("/:id", bc.uploadCoverImageMiddleware, bc.updateBlog);
    blogRouteAdmin.delete("/:id", bc.deleteBlog);
    blogRouteAdmin.get("/:urlTitle", bc.getBlogByUrlTitle);
    
    // Blog-tag management
    blogRouteAdmin.get("/tags", btc.getAllTagsWithBlogInfo); //✅
    blogRouteAdmin.get("/tags/:tagName", btc.getTagByName); //✅
    blogRouteAdmin.get("/tag/:tagName", btc.getBlogsByTag); //✅
    blogRouteAdmin.post("/tags", btc.addTag); 
    blogRouteAdmin.delete("/tags", btc.deleteTag);
    blogRouteAdmin.put("/tags/:id", btc.updateTag);
    
    // Blog comments
    blogRouteAdmin.post("/:blogId/comments", buc.addComment); //✅
    blogRouteAdmin.delete("/comments/:commentId", buc.deleteComment); //✅
    
    //sample-test 
    blogRouteAdmin.get("/sample/:id/like", buc.sample); //✅
    
    // Likes
    blogRouteAdmin.post("/:blogId/like", buc.toggleLikeBlog); //✅
      
}


// 🔑 **User Routes** (Any authenticated user)
{
    blogRouteUser.use(jwtAuthentication);
    blogRouteUser.get("/:urlTitle", bc.getBlogByUrlTitle);
    // Interact with blog
    blogRouteUser.post("/:blogId/comments", buc.addComment);
    blogRouteUser.delete("/comments/:commentId", buc.deleteComment);
    blogRouteUser.post("/:blogId/like", buc.toggleLikeBlog);
    blogRouteUser.get("/", bc.getBlogs);

    // Search
    blogRouteUser.get("/search", bc.searchBlogs);
}

export { blogRouteAdmin, blogRouteUser, blogRoutePublic };