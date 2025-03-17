// controllers/subEventVendorsController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.updateSubEventVendors = async (req, res) => {
  const { id } = req.params;
  const { serviceId } = req.body;

  try {
    const updatedSubEventVendor = await prisma.subEventVendors.update({
      where: { id },
      data: {
        serviceId,
        // No need to update createdAt for updates
      },
    });
    res.json(updatedSubEventVendor);
  } catch (error) {
    res.status(500).json({ error: 'Error updating sub-event vendor' });
  }
};
