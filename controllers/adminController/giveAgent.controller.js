import { PrismaClient } from "../../prisma/generated/postgres/index.js";
const prisma = new PrismaClient();

const giveAgent = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    if (user.role === "AGENT") {
      return res.status(400).json({ message: "User is already an agent." });
    }
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { role: "AGENT" },
    });
    res.status(200).json({
      message: "User successfully promoted to agent.",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export default giveAgent; 