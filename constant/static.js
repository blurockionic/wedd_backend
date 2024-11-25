export  const registerEmailContent = (token,role) => ({
    subject: "Weed-Clone Email Verification",
    text: `Click on the link below to verify your email: ${process.env.BASE_URL}/api/v1/users/verify-email?token=${token}&entityType=${role}`,
    html: `
      <p>Hello,</p>
      <p>Thank you for registering. Please verify your email using the link below:</p>
      <a href="${process.env.BASE_URL}/api/v1/users/verify-email?token=${token}&entityType=${role}">Verify Email</a>
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

  export const vendorRegisterEmailContent = (token,role) => ({
    subject: "Weed-Clone Vendor Email Verification",
    text: `Click on the link below to verify your email as a vendor: ${process.env.BASE_URL}/api/v1/vendors/verify-email?token=${token}&entityType=${role}`,
    html: `
      <p>Hello,</p>
      <p>Thank you for registering as a vendor. Please verify your email using the link below:</p>
      <a href="${process.env.BASE_URL}/api/v1/vendors/verify-email?token=${token}&entityType=${role}">Verify Vendor Email</a>
      <p>This link will expire in 10 minutes.</p>
      <p>Regards,<br>Your App Team</p>
    `,
  });

  export const vendorResetPassEmailContent = (token) => ({
    subject: "Weed-Clone Vendor Password Reset Request",
    text: `Click on the link below to reset your vendor password: ${process.env.BASE_URL}/api/v1/vendors/reset-password?token=${token}`,
    html: `
      <p>Hello,</p>
      <p>We received a request to reset your vendor password. Please click the link below to reset it:</p>
      <a href="${process.env.BASE_URL}/api/v1/vendors/reset-password?token=${token}">Reset Vendor Password</a>
      <p>This link will expire in 10 minutes.</p>
      <p>If you did not request a password reset, please ignore this email.</p>
      <p>Regards,<br>Your App Team</p>
    `,
  });
  