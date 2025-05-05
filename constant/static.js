// user registration 
export const registerEmailContent = (token, role) => ({
  subject: "💍 Welcome to Marriage Vendors - Verify Your Email",
  text: `Hello,\n\nWelcome to Marriage Vendors! We're excited to be part of your journey. Please verify your email using the link below:\n\n${process.env.BACKEND_URL}/api/v1/users/verify-email?token=${token}&entityType=${role}\n\nThis link will expire in 10 minutes.\n\nWishing you a lifetime of happiness,\nMarriage Vendors Team`,
  html: `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; text-align: center; background-color: #FFF;">
      
      <!-- Header with Romantic Theme -->
      <div style="padding: 15px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
        <img src="https://res.cloudinary.com/dyq1p22xk/image/upload/v1738318157/wedding-wire-clone/assets/profile_photo-1738318154094-138572527.png" alt="Marriage Vendors Logo" style="max-width: 120px;">
      </div>

      <!-- Couple Image / Romantic Theme -->
      <img src="https://res.cloudinary.com/dyq1p22xk/image/upload/v1738726158/wedding-wire-clone/assets/profile_photo-1738726154668-353715542.png" alt="Happy Couple" style="max-width: 100%; border-radius: 10px; margin-top: 20px;">
      
      <h2 style="color: #F20474; margin-top: 20px;">Welcome to Marriage Vendors! 💖</h2>
      
      <p style="font-size: 16px; color: #333;">Hello,</p>
      <p style="font-size: 16px; color: #333;">
        Congratulations on taking the first step towards your dream wedding! We are delighted to have you onboard at <strong>Marriage Vendors</strong>.
      </p>
      
      <p style="font-size: 16px; color: #333;">
        Please verify your email to unlock exclusive wedding planning tools and vendor recommendations tailored just for you.
      </p>

      <!-- Call-to-Action Button -->
      <div style="margin: 20px 0;">
        <a href="${process.env.BACKEND_URL}/api/v1/users/verify-email?token=${token}&entityType=${role}"
           style="background-color: #FDCD16; color: #000; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 16px; display: inline-block; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
          💌 Verify Your Email
        </a>
      </div>

      <p style="font-size: 14px; color: #777;">This link will expire in <strong>10 minutes</strong>.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

      <!-- Romantic Quote -->
      <blockquote style="font-style: italic; font-size: 14px; color: #F20474;">"A successful marriage requires falling in love many times, always with the same person." – Mignon McLaughlin</blockquote>
      
      <p style="font-size: 14px; color: #555;">Wishing you a journey full of love and joy,</p>
      <p style="font-size: 14px; color: #555;"><strong>Marriage Vendors Team 💕</strong></p>

      <!-- Footer with Love Theme -->
      <div style="background-color: #F20474; padding: 10px; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; font-size: 12px;">
        <p>If you did not request this email, please ignore it.</p>
        <p>Connect with us ❤️ <a href="https://www.marriagevendors.com/" style="color: #FDCD16; text-decoration: none;">Visit Our Website</a></p>
      </div>
    </div>
  `,
});

//vendor registration 
export const vendorRegisterEmailContent = (token, role) => ({
  subject: "🚀 Verify Your Vendor Account - Marriage Vendors",
  text: `Hello,\n\nThank you for registering as a vendor on Marriage Vendors. Please verify your email using the link below:\n\n${process.env.BACKEND_URL}/api/v1/vendors/verify-email?token=${token}&entityType=${role}\n\nThis link will expire in 10 minutes.\n\nBest regards,\nMarriage Vendors Team`,
  html: `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; text-align: center; background-color: #FFF;">
      
      <!-- Header with Brand Logo -->
      <div style="background-color: #F20474; padding: 15px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
        <img src="https://res.cloudinary.com/dyq1p22xk/image/upload/v1738726158/wedding-wire-clone/assets/profile_photo-1738726154668-353715542.png" alt="Marriage Vendors Logo" style="max-width: 120px;">
      </div>

      <!-- Professional Greeting -->
      <h2 style="color: #F20474; margin-top: 20px;">Welcome to Marriage Vendors! 🎉</h2>
      
      <p style="font-size: 16px; color: #333;">Hello,</p>
      <p style="font-size: 16px; color: #333;">
        Thank you for joining <strong>Marriage Vendors</strong> as a vendor! We're excited to have you on board and look forward to helping you grow your business.
      </p>
      
      <p style="font-size: 16px; color: #333;">
        Please verify your email to activate your vendor account and start receiving customer inquiries.
      </p>

      <!-- Call-to-Action Button -->
      <div style="margin: 20px 0;">
        <a href="${process.env.BACKEND_URL}/api/v1/vendors/verify-email?token=${token}&entityType=${role}"
           style="background-color: #FDCD16; color: #000; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 16px; display: inline-block; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
          ✅ Verify Vendor Email
        </a>
      </div>

      <p style="font-size: 14px; color: #777;">This link will expire in <strong>10 minutes</strong>.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

      <!-- Key Benefits Section -->
      <h3 style="color: #F20474; margin-bottom: 10px;">Why Join Marriage Vendors?</h3>

      <div style="text-align: left; font-size: 14px; color: #555;">
        <ul style="list-style: none; padding: 0;">
          <li>🔎 <strong>Reach Engaged Couples:</strong> Couples can find your Storefront and request information about your business.</li>
          <li>📈 <strong>Get More Leads:</strong> Call directly to potential clients via email or your account Dashboard.</li>
          <li>📅 <strong>Book More Weddings:</strong> Advertise on Wedd to drive more bookings and grow your business.</li>
          <li>📊 <strong>Dedicated Analytics:</strong> Analyze your leads and grow your business effortlessly.</li>
          <li>🏛 <strong>Wedding Venues:</strong> Showcase your venue to couples searching for their dream wedding destination.</li>
          <li>🤝 <strong>Wedding Vendors:</strong> Connect with engaged couples and grow your business effortlessly.</li>
          <li>👰 <strong>Brides:</strong> Promote your services directly to brides planning their big day.</li>
          <li>🤵 <strong>Grooms:</strong> Offer your expertise to grooms preparing for their wedding journey.</li>
        </ul>
      </div>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

      <!-- Business Quote -->
      <blockquote style="font-style: italic; font-size: 14px; color: #F20474;">
        "Success in business comes from partnerships and trust. Let's build something great together!"
      </blockquote>
      
      <p style="font-size: 14px; color: #555;">Best regards,</p>
      <p style="font-size: 14px; color: #555;"><strong>Marriage Vendors Team 🚀</strong></p>

      <!-- Footer with Contact Info -->
      <div style="background-color: #F20474; padding: 10px; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; font-size: 12px;">
        <p>If you did not request this email, please ignore it.</p>
        <p>Need Help? 📩 <a href="mailto:support@blurockionic.com" style="color: #FDCD16; text-decoration: none;">Contact Us</a></p>
      </div>

    </div>
  `,
});

// reset password for user 
export const resetPassEmailContent = (token) => ({
  subject: "🔒 Reset Your Password - Secure Your Account | Marriage Vendors",
  text: `Hello,

We received a request to reset your password. Click the link below to reset it:

${process.env.BASE_URL}/user-change-password?token=${token}

This link will expire in 10 minutes.

If you did not request a password reset, please ignore this email.

Best regards,
Marriage Vendors Team`,
  html: `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; text-align: center; background-color: #FFF;">
      
      <!-- Header with Brand Logo -->
      <div style="padding: 15px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
        <img src="https://res.cloudinary.com/dyq1p22xk/image/upload/v1738318157/wedding-wire-clone/assets/profile_photo-1738318154094-138572527.png" alt="Marriage Vendors Logo" style="max-width: 120px;">
      </div>

      <h2 style="color: #F20474; margin-top: 20px;">🔒 Password Reset Request</h2>
      
      <p style="font-size: 16px; color: #333;">Hello,</p>
      <p style="font-size: 16px; color: #333;">
        We received a request to reset your password. Please click the button below to proceed.
      </p>
      
      <!-- Call-to-Action Button -->
      <div style="margin: 20px 0;">
        <a href="${process.env.BASE_URL}/user-change-password?token=${token}"
           style="background-color: #FDCD16; color: #000; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 16px; display: inline-block; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
          🔄 Reset Password
        </a>
      </div>
      
      <p style="font-size: 14px; color: #777;">This link will expire in <strong>10 minutes</strong>.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

      <p style="font-size: 14px; color: #555;">If you did not request this, please ignore this email.</p>
      
      <p style="font-size: 14px; color: #555;">Stay secure,</p>
      <p style="font-size: 14px; color: #555;"><strong>Marriage Vendors Team</strong></p>

      <!-- Footer with Support Contact -->
      <div style="background-color: #F20474; padding: 10px; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; font-size: 12px;">
        <p>Need Help? 📩 <a href="mailto:support@marriagevendors.com" style="color: #FDCD16; text-decoration: none;">Contact Us</a></p>
      </div>
    </div>
  `,
});

// reset password for vendor 
export const vendorResetPassEmailContent = (token) => ({
  subject: "🔒 Reset Your Vendor Password - Marriage Vendors",
  text: `Hello,

We received a request to reset your vendor password. Click the link below to reset it:

${process.env.BASE_URL}/vendor-change-password?token=${token}

This link will expire in 10 minutes.

If you did not request a password reset, please ignore this email.

Best regards,  
Marriage Vendors Team`,
  html: `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; text-align: center; background-color: #FFF;">
      
      <!-- Header with Brand Logo -->
      <div style="padding: 15px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
        <img src="https://res.cloudinary.com/dyq1p22xk/image/upload/v1738318157/wedding-wire-clone/assets/profile_photo-1738318154094-138572527.png" alt="Marriage Vendors Logo" style="max-width: 120px;">
      </div>

      <h2 style="color: #F20474; margin-top: 20px;">🔒 Vendor Password Reset Request</h2>
      
      <p style="font-size: 16px; color: #333;">Hello,</p>
      <p style="font-size: 16px; color: #333;">
        We received a request to reset your vendor password. Please click the button below to proceed.
      </p>
      
      <!-- Call-to-Action Button -->
      <div style="margin: 20px 0;">
        <a href="${process.env.BASE_URL}/vendor-change-password?token=${token}"
           style="background-color: #FDCD16; color: #000; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 16px; display: inline-block; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
          🔄 Reset Vendor Password
        </a>
      </div>
      
      <p style="font-size: 14px; color: #777;">This link will expire in <strong>10 minutes</strong>.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

      <p style="font-size: 14px; color: #555;">If you did not request this, please ignore this email.</p>
      
      <p style="font-size: 14px; color: #555;">Stay secure,</p>
      <p style="font-size: 14px; color: #555;"><strong>Marriage Vendors Team</strong></p>

      <!-- Footer with Support Contact -->
      <div style="background-color: #F20474; padding: 10px; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; font-size: 12px;">
        <p>Need Help? 📩 <a href="mailto:support@marriagevendors.com" style="color: #FDCD16; text-decoration: none;">Contact Us</a></p>
      </div>
    </div>
  `,
});

export const shortlistedPartnerEmailContent = (name, tempPassword) => ({
  subject: "🎉 You're Shortlisted as a Partner! | Marriage Vendors",
  text: `Hi ${name},

Congratulations! You've been shortlisted to join Marriage Vendors.

Here is your temporary login password: ${tempPassword}

Please log in to your dashboard and change your password immediately:
${process.env.BASE_URL}/partner-login

We’re excited to have you on board!

- Marriage Vendors Team`,
  html: `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #eee;">
      <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dyq1p22xk/image/upload/v1738318157/wedding-wire-clone/assets/profile_photo-1738318154094-138572527.png" alt="Marriage Vendors Logo" style="max-width: 100px;" />
        <h2 style="color: #F20474;">🎉 You're Shortlisted!</h2>
      </div>
      <p>Hi <strong>${name}</strong>,</p>
      <p>Congratulations! You’ve been shortlisted to join <strong>Marriage Vendors</strong>.</p>
      <p><strong>Your temporary login password:</strong></p>
      <div style="font-size: 18px; font-weight: bold; padding: 10px; background: #f5f5f5; border-radius: 5px; display: inline-block;">${tempPassword}</div>
      <p>Please log in and change your password immediately:</p>
      <a href="${process.env.BASE_URL}/partner-login" style="background: #FDCD16; color: black; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">Login Now</a>
      <hr style="margin: 20px 0;" />
      <p>Welcome aboard! 💍</p>
      <p><strong>– The Marriage Vendors Team</strong></p>
    </div>
  `,
});


  
