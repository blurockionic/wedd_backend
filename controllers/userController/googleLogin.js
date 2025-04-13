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
    const {
      googleUid,
      email,
      displayName,
      photoURL,
      googleIdToken,
      phone_number,
      wedding_location,
    } = req.body;

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

    //verify user gamil exist or not
    let user = await prisma.User.findUnique({
      where: { email },
    });

    let isNewUser = false;

    if (user) {
      if (!user.googleUid) {
        user = await prisma.User.update({
          where: { email },
          data: { googleUid: verifiedGoogleUid },
        });
      } else if (user.googleUid !== verifiedGoogleUid) {
        console.log("Google UID mismatch:", user.googleUid, verifiedGoogleUid);

        throw new CustomError(
          "This email is already associated with another Google account.",
          400
        );
      }
    } else {
      isNewUser = true;
      user = await prisma.User.create({
        data: {
          googleUid: verifiedGoogleUid,
          email,
          user_name: displayName || "Google User",
          profile_photo: photoURL,
          is_verified: true,
          phone_number: phone_number || "",
          role: "USER",
          wedding_date: null,
          wedding_location: wedding_location || "",
          password_hash: null,
        },
      });
    }

    // ⬇️ Generate Tokens
    const accessToken = await GenerateToken.generateAccessToken(user);
    const refreshToken = await GenerateToken.generateRefreshToken(user);

    const {
      password_hash,

      resetPassword_Token,
      updated_at,
      created_at,
      ...sanitizedUser
    } = user;

    const updateData = {
      refresh_Token: refreshToken, // always update
    };

    if (!user.phone_number && phone_number?.trim()) {
      updateData.phone_number = phone_number.trim();
    }
    
    if (!user.wedding_location && wedding_location?.trim()) {
      updateData.wedding_location = wedding_location.trim();
    }
  
      await prisma.User.update({
        where: { googleUid: user.googleUid },
        data: updateData,
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
        message: isNewUser
          ? "Google Signup successful"
          : "Google Login successful",
        accessToken,
        user: { ...user, password_hash: undefined },
      });
  } catch (error) {
    next(error);
  }
};

export default googleLogin;

export const checkUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await prisma.User.findUnique({
      where: { email },
      select: {
        id: true,
        phone_number: true,
        wedding_location: true,
        googleUid: true,
        is_verified: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error checking user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
