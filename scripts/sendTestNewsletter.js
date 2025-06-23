import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';
import { weeklyBlogNewsletterContent } from '../constant/static.js';

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
  const blogData = [
    {
      title: "Top 10 Mandap Designs for 2025 Weddings",
      excerpt: "Minimalist, floral, and royal — see what’s trending this wedding season.",
      url: "https://www.marriagevendors.com/blog/mandap-designs-2025"
    },
    {
      title: "How to Choose the Perfect DJ for Your Reception",
      excerpt: "Don’t book a DJ without asking these key questions.",
      url: "https://www.marriagevendors.com/blog/wedding-dj-checklist"
    },
    {
      title: "Modern Mehendi Party Decor Ideas",
      excerpt: "Add color, charm, and personality to your Mehendi function.",
      url: "https://www.marriagevendors.com/blog/mehendi-decor-ideas"
    }
  ];
  
  const topTags = ["BridalMakeup", "PreWeddingShoot", "DestinationWeddings"];
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