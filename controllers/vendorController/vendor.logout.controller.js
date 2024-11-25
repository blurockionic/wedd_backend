import CustomError from "../../utils/CustomError.js";
import { PrismaClient as MongoPrismaClient } from "../../prisma/generated/mongo/index.js";

const mongoPrisma = new MongoPrismaClient();

const vendorLogout = async (req, res, next) => {
  try {
   
    console.log(res.user)

    const vendorId = req.user?.email;

  
    if (!vendorId) {
      return res.status(400).json({ message: "Vendor ID is missing from the authenticated request." });
    }

    // Clear the refresh token from the MongoDB database for the vendor
    await mongoPrisma.Vendor.update({
      where: { email: vendorId },
      data: { refresh_Token: "" }, // Clear the refresh token
    });

    // Cookie options for clearing cookies securely
    const cookieOption = {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "strict",
    };

    // Clear the cookies and respond with a success message
    return res
      .status(200)
      .clearCookie("accessToken", cookieOption)
      .clearCookie("refreshToken", cookieOption)
      .json({
        success: true,
        message: "Vendor logged out successfully",
      });
  } catch (error) {
    console.error("Vendor Logout Error:", error);
    next(new CustomError("Failed to log out vendor", 500));
  }
};

export default vendorLogout;
