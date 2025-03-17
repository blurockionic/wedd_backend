// backend/controller/authController.js (or similar - where you have userLogin)
import GenerateToken from "../../helper/generateToken.js";
import CustomError from "../../utils/CustomError.js";
import { PrismaClient } from "../../prisma/generated/postgres/index.js";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import admin from "firebase-admin";

const serviceAccountBase64 = process.env.GOOGLE_CONFIG_BASE64;
let serviceAccountJson;
try {
  const jsonString = Buffer.from(serviceAccountBase64, "base64").toString(
    "utf-8"
  );
  serviceAccountJson = JSON.parse(jsonString);
} catch (error) {
  console.error("Error:", error);
}

const firebaseApp = initializeApp({
  credential: admin.credential.cert(serviceAccountJson),
});
const prisma = new PrismaClient();
const firebaseAuth = getAuth(firebaseApp);

const googleLogin = async (req, res, next) => {
  try {
    const { googleUid, email, displayName, photoURL, googleIdToken } = req.body;
    
    if (!googleIdToken) {
      throw new CustomError("Google ID Token is missing.", 400);
    }

    let decodedToken;
    try {
      decodedToken = await firebaseAuth.verifyIdToken(googleIdToken);
      if (decodedToken.uid !== googleUid) {
        throw new CustomError(
          "Google ID token verification failed - UID mismatch.",
          401
        );
      }
    } catch (error) {
      console.error("Google ID Token Verification Error:", error);
      throw new CustomError("Invalid Google credentials.", 401);
    }
    const verifiedGoogleUid = decodedToken.uid;

    let user = await prisma.User.findUnique({
      where: { googleUid: verifiedGoogleUid },
    });

    let isNewUser = false; // Flag to indicate if it's a new user

   

    if (!user) {
      isNewUser = true; // Set flag to true for new users

      user = await prisma.User.create({
        data: {
          googleUid: verifiedGoogleUid,
          email: email,
          user_name: displayName || "Google User", // Use displayName as user_name initially (or customize)
          profile_photo: photoURL, 
          is_verified: true,
          phone_number: "", // Leave phone_number empty initially
          role: "USER", // Set a default role (e.g., 'USER'), you might need to adjust this based on your roles
          wedding_date: null, // Leave wedding_date empty
          wedding_location: "",
          password_hash: null, 
         
        },
      });
    }

    const accessToken = await GenerateToken.generateAccessToken(user);
    const refreshToken = await GenerateToken.generateRefreshToken(user);



    const {
      password_hash,

      resetPassword_Token,
      updated_at,
      created_at,
      ...sanitizedUser
    } = user;

    // update refersh data
    
    await prisma.User.update({
        where: { googleUid: user.googleUid },
        data: {
            refresh_Token : refreshToken,
         
        },
      });
      

    
    const cookieOptions = {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      path: "/",
    };

    return res
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .status(200)
      .json({
        success: true,
        message: "Google Login successful",
        accessToken,
        user: sanitizedUser,
      });
  } catch (error) {
    next(error);
  }
};

export default googleLogin;
