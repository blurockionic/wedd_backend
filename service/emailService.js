import nodemailer from 'nodemailer';
import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";


const sendVerificationEmail = async (email,userId,createEmailContent) => {

    // Generate a verification token and send it to the user's email using nodemailer.
try {

  console.log(email,userId+"from email")
    const verificationToken = jwt.sign({ email, userId }, process.env.JWT_SECRET, { expiresIn: process.env.EMAIL_EXP });

    // smtp server creation for this 
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    // Construct the email content with the verification link
    
    const emailContent = createEmailContent(verificationToken);

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    };
    
    // send the mail to user
      await transporter.sendMail(mailOptions);

      return{verificationToken}

} catch (error) {
  console.error("Error sending email:", error.message);
  console.error("Stack trace:", error.stack);

    throw new CustomError('Failed to send verification email', 500); 
}
}

export default sendVerificationEmail;