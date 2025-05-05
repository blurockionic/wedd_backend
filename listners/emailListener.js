import { emailEmitter } from "../utils/emailEmitter";

import sendEmail from "../service/emailService";


emailEmitter.on("sendEmail", async ({email,content }) => {



  try {
    await sendEmail({ email, content });
    console.log(`✅ Email sent to ${email}`);
  } catch (err) {
    console.error(`❌ Failed to send email to ${to}:`, err.message);
  }
});