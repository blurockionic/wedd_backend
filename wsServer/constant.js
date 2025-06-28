import { getServiceLocationsData } from "../controllers/serviceController/getAllLocation.controller.js";

export const AVAILABLE_CATEGORIES = [
  "wedding lawns farmhouse",
  "hotel",
  "banquet halls",
  "marriage garden",
  "wedding halls",
  "wedding resorts",
  "caterers",
  "wedding invitation",
  "wedding decor",
  "wedding gift",
  "wedding photographers",
  "wedding coordinators",
  "wedding music",
  "wedding videographers",
  "wedding transportation",
  "wedding house",
  "tent house",
  "wedding entertainment",
  "florists",
  "wedding planner",
  "wedding decoration",
  "wedding cakes",
  "wedding agencies",
  "wedding dj",
  "pandit",
  "photobooth",
  "astrologers",
  "invitation",
  "bridal lahenga",
  "bridal jewellery",
  "bridal makeup artist",
  "mehndi artist",
  "makeup salon",
  "sherwani",
  "men's grooming",
  "men's accessories"
];

let AVAILABLE_LOCATIONS = [];

// Function to get locations using existing controller logic
async function fetchLocationsFromDB() {
  try {
    const formattedLocations = await getServiceLocationsData();
   
    const locationsArray = [];
    Object.values(formattedLocations).forEach(cities => {
      if (Array.isArray(cities)) {
        locationsArray.push(...cities.map(city => city.toLowerCase()));
      }
    });

    return AVAILABLE_LOCATIONS= locationsArray;
  } catch (error) {
    console.error('Error fetching locations from DB:', error);
    
  }
}

export const loadAvailableLocations = async () => {
  try {
    AVAILABLE_LOCATIONS = await fetchLocationsFromDB();
    console.log('Loaded locations from DB:', AVAILABLE_LOCATIONS);
  } catch (error) {
    console.error('Error loading locations:', error);
  }
};

export { AVAILABLE_LOCATIONS };

export const DEFAULT_INTRO_MESSAGE = `Hi there! 👋 I can help you find wedding vendors like caterers, decorators, venues, makeup artists, and more.
You can say things like:
👉 *I want to book a makeup artist in Mumbai*
👉 *Tell me a wedding joke*`;

export const JOKE_RESPONSE = `Why don't wedding photographers ever get lost?
Because they always *follow the groom*! 😄`;

export const INFO_MESSAGE = `We help you find and book the best wedding vendors — venues, makeup artists, caterers, decorators, photographers, and more — in your preferred location.
Just type something like:
👉 *I want to book a photographer in Delhi*`;
