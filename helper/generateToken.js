import jwt from 'jsonwebtoken';
import CustomError from '../utils/CustomError.js'; // Ensure this is correctly imported

class GenerateToken {
    
  // Method to generate the access token
  static generateAccessToken(user) {
    try {
      const { user_id, email, first_name, last_name, role } = user;

      return jwt.sign(
        {
          user_id,
          email,
          first_name,
          last_name,
          role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: process.env.ACCESS_TOKEN_EXP,
        }
      );
    } catch (error) {
      console.error('Error generating access token:', error);
      throw new CustomError('Failed to generate access token.', 500);
    }
  }

  // Method to generate the refresh token
  static generateRefreshToken(user) {
    try {
      const { user_id } = user;

      return jwt.sign(
        { user_id },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: process.env.REFRESH_TOKEN_EXP,
        }
      );
    } catch (error) {
      console.error('Error generating refresh token:', error);
      throw new CustomError('Failed to generate refresh token.', 500);
    }
  }
  static vendorGenerateRefreshToken(user) {
    try {
      const { id } = user;
      

      return jwt.sign(
        { id },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: process.env.REFRESH_TOKEN_EXP,
        }
      );
    } catch (error) {
      console.error('Error generating refresh token:', error);
      throw new CustomError('Failed to generate refresh token.', 500);
    }
  }
  static generatePasswordResetToken(user) {
    try {
      const { user_id } = user;

      return jwt.sign(
        { user_id },
        process.env.RESET_TOKEN_SECRET,
        {
          expiresIn: process.env.RESET_TOKEN_EXP,
        }
      );
    } catch (error) {
      console.error('Error generating reset token:', error);
      throw new CustomError('Failed to generate reset token.', 500);
    }
  }
  static generateVendorPasswordResetToken(user) {
    try {
      const { id } = user;

      return jwt.sign(
        {id },
        process.env.RESET_TOKEN_SECRET,
        {
          expiresIn: process.env.RESET_TOKEN_EXP,
        }
      );
    } catch (error) {
      console.error('Error generating reset token:', error);
      throw new CustomError('Failed to generate reset token.', 500);
    }
  }

// fuction for generate email verification token
  static generateEmailVerificationToken(user) {
    try {
      const { user_id ,email} = user;
      return jwt.sign(
        { user_id ,email},
        process.env.EMAIL_TOKEN_SECRET,
        {
          expiresIn: process.env.EMAIL_TOKEN_EXP,
        }
      );
    } catch (error) {
      console.error('Error generating email verification token:', error);
      throw new CustomError('Failed to generate email verification token.', 500);
    }
  }


}

export default GenerateToken;
