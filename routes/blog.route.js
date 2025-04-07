import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { addBlog, getBlogs, getBlogById, updateBlog, deleteBlog, getBlogsByTag, getBlogByUrlTitle, searchBlogs,getPublishedBlogs, uploadCoverImageMiddleware, getPublishedBlogCount, getDraftBlogCount, toggleBlogStatus } from "../controllers/blogController/blog.controller.js";
import { addTag, getAllTagsWithBlogs, getTagByName, deleteTag, updateTag} from "../controllers/blogController/tags.blog.controller.js";
import { toggleLikeBlog, addComment, deleteComment, getBlogCount, getTotalViewCount } from "../controllers/blogController/utils.blog.controller.js";

const blogRouteAdmin = express.Router();
const blogRouteUser = express.Router();
const blogRoutePublic = express.Router();

// 🚀 **Public Routes** (Accessible without authentication)
{
blogRoutePublic.get("/allBlog", getBlogs); // Fetch all blogs
blogRoutePublic.get("/allBlog/:id", getBlogById); // Fetch a single blog by ID
blogRoutePublic.get("/allBlog/:urlTitle", getBlogByUrlTitle); // Fetch a blog by url title
blogRoutePublic.get("/blog_count", getBlogCount); // Get total blog count
blogRoutePublic.get("/view_count", getTotalViewCount); // Get total view count
blogRoutePublic.get("/publishedBlogs", getPublishedBlogs); // Get published blogs
}

// 🔒 **Admin Routes** (Only accessible by authenticated ADMIN users)
{
    blogRouteAdmin.use(jwtAuthentication, roleMiddleware(["ADMIN", "SUPER_ADMIN"]));
    blogRouteAdmin.post("/add", uploadCoverImageMiddleware, addBlog); // Add a new blog with cover image
    blogRouteAdmin.get("/allBlog", getBlogs); // Fetch all blogs
    blogRouteAdmin.post("/allBlog/:id", getBlogById); // Fetch a single blog by ID
    blogRouteAdmin.get("/allBlog/:urlTitle", getBlogByUrlTitle); // Fetch a blog by url title
    blogRouteAdmin.get("/publishedBlogs", getPublishedBlogs); // Get published blogs
    blogRouteAdmin.get("/publishedBlogCount", getPublishedBlogCount); // Get count of published blogs
    blogRouteAdmin.get("/draftBlogCount", getDraftBlogCount); // Get count of draft blogs

    blogRouteAdmin.delete("/allBlog/:id", deleteBlog); // Delete a blog
    blogRouteAdmin.put("/allBlog/:id", uploadCoverImageMiddleware, updateBlog); // Update a blog with cover image
    
    blogRouteAdmin.get("/searchBlog", searchBlogs); // Search blogs
    blogRouteAdmin.post("/allBlog/:id/comment", addComment); // Add a comment to a blog
    blogRouteAdmin.post("/allBlog/:id/togglelike", toggleLikeBlog); // Toggle like on a blog
    blogRouteAdmin.delete("/allBlog/:id/comment/:commentId", deleteComment); // Delete a comment
    blogRouteAdmin.get("/blog_count", getBlogCount); // Get total blog count
    blogRouteAdmin.get("/view_count", getTotalViewCount); // Get total view count
    blogRouteAdmin.patch("/allBlog/:id/toggleStatus", toggleBlogStatus); // Toggle blog status
}

// Blog-tags routes
{
blogRouteAdmin.get('/allTags', getAllTagsWithBlogs); // Get all tags with blogs ✅
blogRouteAdmin.post('/addtag', addTag); // Add a new tag ✅
blogRouteAdmin.post('/searchTag', getTagByName); // Search for a tag by name 
blogRouteAdmin.put('/updateTag/:id', updateTag); // Update a tag 
blogRouteAdmin.delete('/deleteTag', deleteTag); // Delete a tag ✅
blogRouteAdmin.get('/getBlogsByTag/:tagName', getBlogsByTag); // Get blogs by tag
}
// 🔑 **User Routes** (Only authenticated users can interact)
{
blogRouteUser.use(jwtAuthentication);
blogRouteUser.get("/publishedBlogs", getPublishedBlogs); // Get published blogs
blogRouteUser.get("/allBlog/:id", getBlogById); // Fetch a single blog by ID
blogRouteUser.get("/allBlog/:urlTitle", getBlogByUrlTitle); // Fetch a blog by url title
blogRouteUser.post("/allBlog/:id/togglelike", toggleLikeBlog); // Toggle like on a blog
blogRouteUser.post("/allBlog/:id/comment", addComment); // Add a comment to a blog
blogRouteUser.delete("/allBlog/:id/comment/:commentId", deleteComment); // Delete a comment
}

export { blogRouteAdmin, blogRouteUser, blogRoutePublic };