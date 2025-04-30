import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";
import upload from "../../middleware/multer.middleware.js"; // Import your Cloudinary multer middleware

// Initialize Prisma client correctly
const postgresPrisma = new PostgresClient();

// Helper function to map experience string to ExperienceRange enum
const mapExperienceToEnum = (experienceStr) => {
  // Match the format based on your schema's enum values
  switch (experienceStr) {
    case "0–1 year":
      return "LESS_THAN_ONE"; // Updated to match schema
    case "1–3 years":
      return "ONE_TO_THREE";
    case "3–5 years":
      return "THREE_TO_FIVE";
    case "5+ years":
      return "FIVE_PLUS";
    default:
      return "LESS_THAN_ONE"; // Default value updated
  }
};

// Helper function to map working model string to WorkingModel enum
const mapWorkingModelToEnum = (modelStr) => {
  // Map the string values to enum values based on your schema
  switch (modelStr) {
    case "Salary + Incentives (Only for Planners)":
      return "SALARY_INCENTIVES"; // Updated to match schema
    case "Commission Based":
      return "COMMISSION";
    case "Both":
      return "BOTH";
    default:
      return "COMMISSION"; // Default value updated
  }
};

// Helper function to map availability string to AvailabilityType enum
const mapAvailabilityToEnum = (availabilityStr) => {
  switch (availabilityStr) {
    case "Full Time":
      return "FULL_TIME";
    case "Part Time":
      return "PART_TIME";
    case "Project Based":
      return "PROJECT_BASED";
    default:
      return "PART_TIME"; // Default value
  }
};

// Helper function to map role string to PartnerRole enum
const mapRoleToEnum = (roleStr) => {
  if (roleStr.includes("Caterer")) return "CATERER";
  if (roleStr.includes("Photographer")) return "PHOTOGRAPHER";
  if (roleStr.includes("Decorator")) return "DECORATOR";
  if (roleStr.includes("Planner")) return "EVENT_PLANNER";
  if (roleStr.includes("Makeup")) return "MAKEUP_ARTIST";
  return "OTHER";
};

// Handle for create partner application
const createPartner = async (req, res, next) => {
  try {
    // Optional userId for authenticated users
    const userId = req.user?.id; // Will be undefined for public submissions
    const {
      fullName,
      email,
      phoneNumber,
      city:cityRegion,
      state,
      role,
      otherRoleDetails, // Renamed from otherRole to match schema
      experience,
      workedOnWeddings,
      portfolioUrl, // Renamed from portfolio to match schema
      motivationNote, // Renamed from whyPartner to match schema
      workingModel,
      availability,
      noLeadLeakage,
      platformDeals,
      ndaAgreement
    } = req.body;

    // Validate required fields
    if (!fullName || !email || !phoneNumber || !cityRegion || !role) {
      throw new CustomError("All required fields must be provided", 400);
    }

    // Handle file uploads from Cloudinary
    const governmentIdUrl = req.files?.governmentId?.[0]?.path || null; // Renamed
    const businessCertUrl = req.files?.businessCertificate?.[0]?.path || null; // Renamed
    const workSamplesUrls = req.files?.workSamples?.map(file => file.path) || []; // Renamed

    // Create data object matching schema field names exactly
    const partnerData = {
      fullName,
      email,
      phoneNumber,
      cityRegion,
      role: mapRoleToEnum(role), // Map to enum
      otherRoleDetails: role === "OTHER" ? otherRoleDetails : null,
      experienceYears: mapExperienceToEnum(experience),
      workedOnWeddings: Boolean(workedOnWeddings),
      portfolioUrl: portfolioUrl || null,
      state,
      governmentIdUrl,
      businessCertUrl,
      workSamplesUrls, // This is now an array as per schema
      motivationNote: motivationNote || "", // Required field
      preferredModel: mapWorkingModelToEnum(workingModel),
      availability: mapAvailabilityToEnum(availability),

      // Agreement fields - all required booleans
      agreedNoLeadLeakage: Boolean(noLeadLeakage),
      agreedPlatformDeals: Boolean(platformDeals), // Was missing in original
      agreedToNDA: Boolean(ndaAgreement), // Renamed from ndaAgreement

      applicationStatus: "PENDING", // Default status mapped to enum
    };

    // Only add userId if it exists (for authenticated submissions)
    if (userId) {
      partnerData.userId = userId;
    }

    // Create the partner application using the direct Partner model
    const newPartner = await postgresPrisma.partner.create({
      data: partnerData,
    });

    res.status(201).json({
      success: true,
      message: "Partner application submitted successfully",
      application: newPartner,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );
    next(error.message);
  }
};

export default createPartner;