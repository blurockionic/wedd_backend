import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const prisma = new PostgresClient();

//sample test route
export async function sample(req, res){
  const { id } = req.params;
  res.status(200).json({ message: 'Sample endpoint', id });
}

// Add a comment to a blog
export async function addComment(req, res) {
  const { id } = req.params; console.log(id);
  const { content } = req.body;
  const userId = req.user.id;

  if (!id) {
    return res.status(400).json({ error: 'Blog ID is required' });
  }

  try {
    const blogExists = await prisma.blog.findUnique({ where: { id } });

    if (!blogExists) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        authorId: userId, // Use only authorId
        blog: {
          connect: { id }
        }
      },
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment', details: err.message });
  }
}

// Delete a comment
export async function deleteComment(req, res) {
  const { commentId } = req.params;
  const userId = req.user.id;

  try {
    const comment = await prisma.comment.findUnique({ where: { id: commentId } });
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    
    if (comment.authorId !== userId && !req.user.isAdmin) {
      return res.status(403).json({ error: 'Not authorized to delete this comment' });
    }

    await prisma.comment.delete({ where: { id: commentId } });
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete comment', details: err.message });
  }
}

// Toggle like on a blog
export async function toggleLikeBlog(req, res) {
  const { id } = req.params;
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
            blogId: id 
          } 
        } 
      });
      await prisma.blog.update({
        where: { id: id },
        data: { likes: { decrement: 1 } },
      });
      return res.json({ message: 'Unliked' });
    } else {
      await prisma.likedBlog.create({
        data: {
          userId,
          blogId: id,
        },
      });
      await prisma.blog.update({
        where: { id: id },
        data: { likes: { increment: 1 } },
      });
      return res.json({ message: 'Liked' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to toggle like', details: err.message });
  }
}

// Get count of blogs (all, draft, published)
export async function getBlogCount(req, res) {
  try {
    const [all, draft, published] = await Promise.all([
      prisma.blog.count(),
      prisma.blog.count({ where: { status: 'DRAFT' } }),
      prisma.blog.count({ where: { status: 'PUBLISHED' } }),
    ]);
    res.json({ all, draft, published });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog counts', details: err.message });
  }
}

// Get total view count of all blogs
export async function getTotalViewCount(req, res) {
  console.log("sample");
  try {
    const result = await prisma.blog.aggregate({
      _sum: {
        viewCount: true,
      },
    });
    res.json({ totalViews: result._sum.viewCount || 0 });
  } catch (err) {
  res.status(500).json({ error: 'Failed to fetch total views', details: err.message });
  }
}