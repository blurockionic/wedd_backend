import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";

const sendEmail = async (email, emailContent) => {
  // Generate a verification token and send it to the user's email using nodemailer.
  try {
    // smtp server creation for this

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Construct the email content with the verification link

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      ...emailContent,
    };

    console.dir(mailOptions);
    

    // send the mail to user
    await transporter.sendMail(mailOptions);
    return "mail sent"
  } catch (error) {
    console.error("Error sending email:", error.message);
    console.error("Stack trace:", error.stack);

    throw new CustomError( error.message, 500);
  }
};

export default sendEmail;
