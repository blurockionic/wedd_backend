import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PostgresClient();

//sample test route
export async function sample(req, res) {
  const { id } = req.params;
  res.status(200).json({ message: "Sample endpoint", id });
}

// Add a comment to a blog
export async function addComment(req, res) {
  const { blogId } = req.params;
  const id = blogId;
  const { content } = req.body;
  const userId = req.user.id;
  const userName = req.user.user_name;

  if (!id) {
    return res.status(400).json({ error: "Blog ID is required" });
  }

  try {
    const blogExists = await prisma.blog.findUnique({ where: { id } });

    if (!blogExists) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const comment = await prisma.comment.create({
      data: {
        content: content,
        authorId: userId, // Use only authorId
        // authorName: userName,
        blog: {
          connect: { id: id },
        },
      },
    });
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Failed to add comment", details: err.message });
  }
}

// Delete a comment
export async function deleteComment(req, res) {
  const { commentId } = req.params;
  const userId = req.user.id;
  console.log(req.user.role);
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    if (comment.authorId !== userId && req.user.role.search(/admin/gi) === -1) {
      return res
        .status(403)
        .json({ error: "Not authorized to delete this comment" });
    }

    await prisma.comment.delete({ where: { id: commentId } });
    res.json({ message: "Comment deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete comment", details: err.message });
  }
}

// Toggle like on a blog
export async function toggleLikeBlog(req, res) {
  const { blogId } = req.params;
  const id = blogId;
  const userId = req.user.id;

  try {
    const existingLike = await prisma.likedBlog.findUnique({
      where: {
        userId_blogId: {
          userId,
          blogId: id,
        },
      },
    });

    if (existingLike) {
      await prisma.likedBlog.delete({
        where: {
          userId_blogId: {
            userId,
            blogId: id,
          },
        },
      });
      await prisma.blog.update({
        where: { id: blogId },
        data: { likes: { decrement: 1 } },
      });
      return res.json({ message: "Unliked" });
    } else {
      await prisma.likedBlog.create({
        data: {
          userId,
          blogId,
        },
      });
      await prisma.blog.update({
        where: { id: blogId },
        data: { likes: { increment: 1 } },
      });
      return res.json({ message: "Liked" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to toggle like", details: err.message });
  }
}

// Get count of blogs (all, draft, published)
export async function getBlogCount(req, res) {
  try {
    // Calculate date ranges for weekly and monthly counts
    const now = new Date();
    const weekAgo = new Date(now);
    weekAgo.setDate(now.getDate() - 7);
    const monthAgo = new Date(now);
    monthAgo.setMonth(now.getMonth() - 1);

    const [all, draft, published, weeklyPosts, monthlyPosts, taggedPosts] =
      await Promise.all([
        prisma.blog.count(),
        prisma.blog.count({ where: { status: "DRAFT" } }),
        prisma.blog.count({ where: { status: "PUBLISHED" } }),
        prisma.blog.count({ where: { createdAt: { gte: weekAgo } } }),
        prisma.blog.count({ where: { createdAt: { gte: monthAgo } } }),
        prisma.blog.count({ where: { tags: { some: {} } } }),
      ]);
    res.json({ all, draft, published, weeklyPosts, monthlyPosts, taggedPosts });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch blog counts", details: err.message });
  }
}

// Get total view count of all blogs
export async function getTotalViewCount(req, res) {
  try {
    const now = new Date();
    const weekAgo = new Date(now);
    weekAgo.setDate(now.getDate() - 7);
    const monthAgo = new Date(now);
    monthAgo.setMonth(now.getMonth() - 1);

    const [totalResult, weeklyResult, monthlyResult] = await Promise.all([
      prisma.blog.aggregate({ _sum: { viewCount: true } }),
      prisma.blog.aggregate({
        _sum: { viewCount: true },
        where: { createdAt: { gte: weekAgo } },
      }),
      prisma.blog.aggregate({
        _sum: { viewCount: true },
        where: { createdAt: { gte: monthAgo } },
      }),
    ]);

    const totalViews = totalResult._sum.viewCount || 0;
    const weeklyViews = weeklyResult._sum.viewCount || 0;
    const monthlyViews = monthlyResult._sum.viewCount || 0;
    res.json({ totalViews, weeklyViews, monthlyViews });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch total views", details: err.message });
  }
}

// Get all comments for a specific blog
export async function getAllCommentsForBlog(req, res) {
  const { id } = req.params; // Blog ID

  if (!id) {
    return res.status(400).json({ error: "Blog ID is required" });
  }

  try {
    const blogExists = await prisma.blog.findUnique({ where: { id } });

    if (!blogExists) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const comments = await prisma.comment.findMany({
      where: { blogId: id },
      include: {
        author: {
          select: {
            id: true,
            user_name: true,
            profile_photo: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ success: true, data: comments });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch comments", details: err.message });
  }
}
