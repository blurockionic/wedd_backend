import { PrismaClient } from "../../prisma/generated/mongo/index.js";

const prisma = new PrismaClient();

async function getServiceLocations(req, res) {
  try {
    const locations = await prisma.Service.findMany({
      select: {
        state: true,
        city: true,
      },
    });

    // Format the data as needed
    const formattedLocations = locations.reduce((acc, { state, city }) => {
      if (state) {
        acc[state] = acc[state] || [];
        if (city) {
          acc[state].push(city);
        }
      }
      return acc;
    }, {});

    res.status(200).json(formattedLocations);
  } catch (error) {
    console.error("Error fetching service locations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default getServiceLocations;
