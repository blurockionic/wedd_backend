import { PrismaClient } from "../../prisma/generated/mongo/index.js";

const prisma = new PrismaClient();

// Extracted function that can be reused
export async function getServiceLocationsData() {
  try {
    const locations = await prisma.Service.findMany({
      select: {
        state: true,
        city: true,
      },
       where:{
        status:"active"
      },
      distinct: ["state", "city"],
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

    return formattedLocations;
  } catch (error) {
    console.error("Error fetching service locations:", error);
    throw error;
  }
}

// Controller function for HTTP responses
async function getServiceLocations(req, res) {
  try {
    const formattedLocations = await getServiceLocationsData();
    res.status(200).json(formattedLocations);
  } catch (error) {
    console.error("Error fetching service locations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default getServiceLocations;
