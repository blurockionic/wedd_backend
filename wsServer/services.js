import fetch from "node-fetch";

// Function to fetch services with optional filters
async function fetchServices(filters = {}) {
  try {
    // Build query string from filters
    let queryString = "";
    if (filters && Object.keys(filters).length > 0) {
      // Filter out undefined or empty values
      const filtered = Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v != null && v !== "")
      );

      if (Object.keys(filtered).length > 0) {
        queryString = "?" + new URLSearchParams(filtered).toString();
      }
    }

    const url = `http:///marriage-vendors-nka3z.ondigitalocean.app/api/v1/services${queryString}`;
    console.log("Fetching from URL:", url);

    // Make the API request
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        // Try to extract message from API error structure
        const errorMessage = data?.message || "Failed to fetch services.";
        throw new Error(errorMessage);
      }

    return data;
  } catch (error) {
    console.error("Error in fetchServices:", error);
    throw error;
  }
}

// Helper function to get services by category and location
async function getServicesByCategoryAndLocation(category, location) {
  try {
    const services = await fetchServices({ category, location });
    return services;
  } catch (error) {
    console.error("Failed to fetch services:", error);
    throw error;
  }
}

export { fetchServices, getServicesByCategoryAndLocation };
