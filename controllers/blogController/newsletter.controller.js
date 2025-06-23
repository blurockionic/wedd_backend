import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
import { weeklyBlogNewsletterContent } from '../../constant/static.js';
import { PrismaClient as PostgresClient, Prisma } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

// Create a transporter using a test SMTP service (e.g., Ethereal)
async function sendTestNewsletter() {
    // Create a Ethereal testing account. You can also use your SMTP server.
    let testAccount = await createTestAccount();

    let transporter = createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure, // true for 465, false for other ports
    auth: {
        user: testAccount.user,
        pass: testAccount.pass
    }
    });

    // Prepare test data for the newsletter
    // const blogData = [
    // {
    //     title: "Top 10 Mandap Designs for 2025 Weddings",
    //     excerpt: "Minimalist, floral, and royal — see what’s trending this wedding season.",
    //     url: "https://www.marriagevendors.com/blog/mandap-designs-2025"
    // },
    // {
    //     title: "How to Choose the Perfect DJ for Your Reception",
    //     excerpt: "Don’t book a DJ without asking these key questions.",
    //     url: "https://www.marriagevendors.com/blog/wedding-dj-checklist"
    // },
    // {
    //     title: "Modern Mehendi Party Decor Ideas",
    //     excerpt: "Add color, charm, and personality to your Mehendi function.",
    //     url: "https://www.marriagevendors.com/blog/mehendi-decor-ideas"
    // }
    // ];

    // Fetch blog data
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const blogData = await postgresPrisma.blog.findMany({
        where: {
            createdAt: {
                gte: oneWeekAgo // Blogs created within the last week
            }
        },
        select: {
            title: true,
            content: true,
            urlTitle: true,
            viewCount: true,
            likes: true,
            coverImage: true,
            tags: true,
        },
        orderBy: {
            viewCount: 'desc', // Order by view count
        },
        take: 5, // Limit to top 5 blogs
    });

    // Format the blog data
    blogData.forEach(blog => {
        blog.coverImage = blog.coverImage || 'https://placehold.co/600x300?text=CoverImage',
        blog.excerpt = blog.excerpt || blog.content
        .replace(/<[^>]*>|&nbsp;|\u00A0/g, ' ') // Remove all HTML tags and non-breaking spaces
        .replace(/\s{2,}/g, ' ')                // Replace multiple spaces with single space
        .trim()                                 // Trim leading/trailing spaces
        .substring(0, 150)                      // Take first 150 characters
        .replace(/\s+\S*$/, '') + '...',        // Cleanly cut at last word boundary
        blog.readTime = `${Math.ceil(blog.content
            .replace(/<[^>]*>|&nbsp;|\u00A0/g, ' ') // Remove all HTML tags and non-breaking spaces
            .replace(/\s{2,}/g, ' ')                // Replace multiple spaces with single space
            .trim()                                 // Trim leading/trailing spaces                      // Take first 150 characters
            .replace(/\s+\S*$/, '') + '...'?.length / 500) || 3} min read`,
        blog.urlTitle = `https://www.marriagevendors.com/blogs/${blog.urlTitle}`; // Construct URL
    });



    console.log(blogData);

    // Prepare the top tags and tip for the newsletter
    const tagsFreq = new Map()

    blogData.forEach(blog => {
        blog.tags.forEach(tag => {
            if (tagsFreq.has(tag)) {
                tagsFreq.set(tag, tagsFreq.get(tag) + 1);
            }
            else{
                tagsFreq.set(tag, 1);
            }
        })
    });

    const topTags = Array.from(tagsFreq.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5).map(entry => entry[0].tagName); // Extract top 5 tag names
    
    console.log("Top Tags:", topTags);


    const tip = "Confirm that your decorator includes lighting — it can make or break your photos!";


    // Get the newsletter content from static.js
    const newsletterContent = weeklyBlogNewsletterContent(blogData, topTags, tip);

    // Mail options
    let mailOptions = {
    from: '"Marriage Vendors" <no-reply@marriagevendors.com>',
    to: "test@example.com", // Replace with your test email address
    subject: newsletterContent.subject,
    text: newsletterContent.text,
    html: newsletterContent.html,
    };

    // Send mail
    let info = await transporter.sendMail(mailOptions);

    console.log("Newsletter sent successfully with message ID:", info.messageId);
    console.log("Preview URL:", getTestMessageUrl(info)); // Preview URL for Ethereal
}

sendTestNewsletter().catch(console.error);