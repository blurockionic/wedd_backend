export  const registerEmailContent = (token) => ({
    subject: "Weed-Clone Email Verification",
    text: `Click on the link below to verify your email: ${process.env.BASE_URL}/api/v1/users/verify-email?token=${token}`,
    html: `
      <p>Hello,</p>
      <p>Thank you for registering. Please verify your email using the link below:</p>
      <a href="${process.env.BASE_URL}/api/v1/users/verify-email?token=${token}">Verify Email</a>
      <p>This link will expire in 10 minutes.</p>
      <p>Regards,<br>Your App Team</p>
    `,
  });


 export  const resetPassEmailContent = (token) => ({
    subject: "Password Reset Request",
    text: `Click on the link below to reset your password: ${process.env.BASE_URL}/api/v1/users/reset-password?token=${token}`,
    html: `
      <p>Hello,</p>
      <p>We received a request to reset your password. Please click the link below to reset it:</p>
      <a href="${process.env.BASE_URL}/api/v1/users/reset-password?token=${token}">Reset Password</a>
      <p>This link will expire in 10 minutes.</p>
      <p>If you did not request a password reset, please ignore this email.</p>
      <p>Regards,<br>Your App Team</p>
    `,
  });