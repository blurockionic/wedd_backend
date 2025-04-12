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
    blogRoutePublic.get("/blogs", bc.getBlogs);
    blogRoutePublic.get("/blogs/:urlTitle", bc.getBlogByUrlTitle);

    // Tags-related
    blogRoutePublic.get("/tags", btc.getAllTagsWithBlogInfo);
    blogRoutePublic.get("/tags/:tagName", btc.getTagByName);
    blogRoutePublic.get("/blogs/tag/:tagName", btc.getBlogsByTag);

    // Stats
    blogRoutePublic.get("/blog-count", buc.getBlogCount); // All, draft, published
}


// 🔒 **Admin Routes** (Authenticated ADMIN / SUPER_ADMIN only)
{
    blogRouteAdmin.use(jwtAuthentication, roleMiddleware(["ADMIN", "SUPER_ADMIN"]));
    
    // Blog CRUD
    blogRouteAdmin.get("/", bc.getBlogs);
    blogRouteAdmin.post("/blogs", bc.addBlog);
    blogRouteAdmin.patch("/blogs/:id", bc.uploadCoverImageMiddleware, bc.updateBlog);
    blogRouteAdmin.delete("/blogs/:id", bc.deleteBlog);
    blogRouteAdmin.get("/blogs/:urlTitle", bc.getBlogByUrlTitle);
    
    // Blog-tag management
    blogRouteAdmin.get("/tags", btc.getAllTagsWithBlogInfo); //✅
    blogRouteAdmin.get("/tags/:tagName", btc.getTagByName); //✅
    blogRouteAdmin.get("/blogs/tag/:tagName", btc.getBlogsByTag); //✅
    blogRouteAdmin.post("/tags", btc.addTag); 
    blogRouteAdmin.delete("/tags", btc.deleteTag);
    blogRouteAdmin.put("/tags/:id", btc.updateTag);
    
    // Blog comments
    blogRouteAdmin.post("/blogs/:id/comments", buc.addComment); //✅
    blogRouteAdmin.delete("/blogs/comments/:commentId", buc.deleteComment); //✅
    
    //sample-test 
    blogRouteAdmin.get("/sample/:id/like", buc.sample); //✅
    
    // Likes
    blogRouteAdmin.post("/blogs/:id/like", buc.toggleLikeBlog); //✅
    
    // Stats
    blogRouteAdmin.get("/blog-count/:status?", buc.getBlogCount); //✅
    blogRouteAdmin.get("/viewCount", buc.getTotalViewCount); //✅
}


// 🔑 **User Routes** (Any authenticated user)
{
    blogRouteUser.use(jwtAuthentication);

    // Interact with blog
    blogRouteUser.post("/blogs/:blogId/comments", buc.addComment);
    blogRouteUser.delete("/blogs/comments/:commentId", buc.deleteComment);
    blogRouteUser.post("/blogs/:blogId/like", buc.toggleLikeBlog);

    // Search
    blogRouteUser.get("/blogs/search", bc.searchBlogs);
}

export { blogRouteAdmin, blogRouteUser, blogRoutePublic };
