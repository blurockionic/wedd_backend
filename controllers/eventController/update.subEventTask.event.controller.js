// controllers/subEventTaskController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.updateSubEventTask = async (req, res) => {
  const { id } = req.params;
  const { items } = req.body;

  try {
    const updatedSubEventTask = await prisma.subEventTask.update({
      where: { id },
      data: {
        items,
        updatedAt: new Date(),
      },
    });
    res.json(updatedSubEventTask);
  } catch (error) {
    res.status(500).json({ error: 'Error updating sub-event task' });
  }
};
