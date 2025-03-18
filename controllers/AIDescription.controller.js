import { GoogleGenerativeAI } from "@google/generative-ai";
const GEMINI_API_KEY = "AIzaSyDkKiTGebi7-RECyY74GDWU3XIfGyawZFs";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateDescription = async (req, res) => {
  const { service_name, min_price, description, service_type, service_unit } = req.body;

  const prompt = `
  Generate a professional, engaging service description tailored for the Indian market. The output must be strictly based on the provided inputs without assuming default values. 
  
  **Service Details:**
  - **Service Name:** ${service_name}
  - **Minimum Price (in INR):** ₹${min_price}
  - **Service Type:** ${service_type}
  - **Service Unit:** ${service_unit}
  - **Additional Information:** ${description}

  
 **Strict Formatting Instructions**
    1. Use ## for main headings, ### for subheadings, and #### for smaller sections.
    2. Wrap important keywords in **bold**.
    3. List key features using - for bullet points.
    4. Format price consistently as **₹${min_price}** every time it's mentioned.
    5. Structure:
      - **Catchy Heading** (##)
      - **About Us Section** (###)
      - **Key Features & Pricing** (###) with bullet points
      - **Call-to-Action** (##) encouraging users to book
  
  **Strict Instructions:**
  1. Always mention the **minimum price exactly as ₹${min_price}**—do not round, assume, or modify this amount.  
  2. Do not generate or guess alternate pricing like ₹4999 unless explicitly provided.  
  3. If referring to price multiple times, consistently use ₹${min_price}.  
  4. Structure the description with:  
     - **Catchy Heading**  
     - **About Us Section** explaining the service  
     - **Bullet Points** highlighting features and pricing  
     - A **Call-to-Action** encouraging users to book  
  5. Keep the tone professional, concise, and culturally aligned with Indian weddings.  
  
  ⚠️ **Critical:** This description must rely solely on the inputs without adding default or assumed values.



  ## **Example Format**
markdown
## Celebrate Your Dreams at the Perfect Venue with h2 tag

### About Us
Experience the elegance of **SD Wedding Lawns & Farmhouses**, where your dream wedding becomes a reality.

### Key Features & Pricing
- **Exquisite Venues:** Beautifully landscaped lawns and charming farmhouses.  
- **Affordable Pricing:** Starting at **₹${min_price} per event**.  
- **Fully Equipped Spaces:** Ready for weddings of all scales.

## Book Your Dream Wedding Today!
Contact us for availability and to discuss your wedding needs.


Ensure the output strictly follows this **Markdown format** without additional assumptions but you can for foramating and sepate the geding from theri context.


  `;

  try {
    const result = await model.generateContent(prompt);
    const generatedDescription = result.response.text();

    res.status(200).json({ generatedDescription });
  } catch (error) {
    console.error("Error generating description:", error);
    res.status(500).json({ message: "Failed to generate description" });
  }
};

export default generateDescription;
