import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import bcrypt from "bcryptjs";

const mongoPrisma = new MongoClient();

const changePassword = async (req, res) => {
  try {
    const { pass: newPass } = req.body;
    const vendorId = req.user.id;
    console.log(newPass,vendorId);
    
    // Hash the new password
    const hashedPass = await bcrypt.hash(newPass, 10);

    // Update vendor password
    await mongoPrisma.Vendor.update({
      where: { id: vendorId },
      data: { password_hash: hashedPass },
    });

    res.status(200).json({ message: "Password updated successfully" ,success:true});
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ message: "Internal server error" ,success:false});
  }
};

export default changePassword;
