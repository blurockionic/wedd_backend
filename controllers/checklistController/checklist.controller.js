import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

export const getChecklist = async (req, res, next) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      throw new CustomError("User ID is required but not found", 404);
    }

    // Fetch checklist for the user
    const checklist = await postgresPrisma.checklist.findFirst({
      where: { userId },
    });

    if (!checklist) {
      let checklist1 = [
        {
          category: "Venue & Decorations",
          items: [
            { name: "Book the wedding venue", done: false },
            { name: "Confirm the capacity and amenities of the venue", done: false },
            { name: "Select a theme for decorations", done: false },
            { name: "Hire a wedding decorator", done: false },
            { name: "Rent furniture, lighting, and props", done: false },
            { name: "Confirm tent house arrangements", done: false },
            { name: "Book florists for floral arrangements", done: false },
          ],
        },
        {
          category: "Catering & Cakes",
          items: [
            { name: "Shortlist catering services", done: false },
            { name: "Finalize the menu", done: false },
            { name: "Schedule food tasting with caterers", done: false },
            { name: "Decide on beverages", done: false },
            { name: "Order the wedding cake", done: false },
          ],
        },
        {
          category: "Photography & Videography",
          items: [
            { name: "Hire photographers (traditional and candid)", done: false },
            { name: "Hire videographers for event coverage", done: false },
            { name: "Book a photobooth with props", done: false },
            { name: "Discuss pre-wedding shoot requirements", done: false },
            { name: "Confirm delivery timeline for photos and videos", done: false },
          ],
        },
        {
          category: "Music & Entertainment",
          items: [
            { name: "Book a wedding DJ or live band", done: false },
            { name: "Choose the type of music for each function", done: false },
            { name: "Plan entertainment performances", done: false },
            { name: "Arrange sound and lighting equipment", done: false },
          ],
        },
        {
          category: "Invitations & Gifts",
          items: [
            { name: "Finalize the design of wedding invitations", done: false },
            { name: "Choose digital or printed invitations", done: false },
            { name: "Order wedding gifts or return favors", done: false },
            { name: "Create a guest list and send out invitations", done: false },
          ],
        },
        {
          category: "Transport & Logistics",
          items: [
            { name: "Book transportation for the wedding party and guests", done: false },
            { name: "Arrange parking space at the venue", done: false },
            { name: "Plan transportation for out-of-town guests", done: false },
          ],
        },
        {
          category: "Religious & Cultural Services",
          items: [
            { name: "Book a pandit or religious officiant", done: false },
            { name: "Arrange for pooja items or ceremony essentials", done: false },
            { name: "Consult astrologers (if required for muhurat or compatibility checks)", done: false },
          ],
        },
        {
          category: "Planning & Coordination",
          items: [
            { name: "Hire a wedding planner or coordinator", done: false },
            { name: "Prepare a timeline for each event", done: false },
            { name: "Assign point-of-contact roles to key people", done: false },
            { name: "Schedule vendor meetings and walkthroughs", done: false },
          ],
        },
        {
          category: "Miscellaneous",
          items: [
            { name: "Arrange for a bridal makeup artist and hairstylist", done: false },
            { name: "Confirm the attire for bride, groom, and close family members", done: false },
            { name: "Prepare an emergency kit", done: false },
            { name: "Ensure backup power or generators at the venue", done: false },
          ],
        },
    ];
      res.status(200).json({
        success: true,
        message: "no checklist for this user found",
        checklist1,
      });
    }
    console.log(checklist.items);
    let checklist1 = checklist.items
    res.status(200).json({
      success: true,
      checklist1,
    });
  } catch (error) {
    next(error);
  }
};


// Save Checklist for the logged-in user
export const saveChecklist = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { checklistItems } = req.body;
    console.log("saving checklist");

    if (!userId) {
      throw new CustomError("userId is required but not found", 404);
    }

    if (!checklistItems || !Array.isArray(checklistItems)) {
      throw new CustomError("Checklist items are required", 400);
    }

    const existingChecklist = await postgresPrisma.Checklist.findFirst({
      where: { userId },
    });

    if (existingChecklist) {
      await postgresPrisma.Checklist.update({
        where: { id: existingChecklist.id },
        data: { items: checklistItems },
      });

      return res.status(200).json({
        success: true,
        message: "Checklist updated successfully",
      });
    }

    const newChecklist = await postgresPrisma.Checklist.create({
      data: {
        userId,
        items: checklistItems,
      },
    });

    res.status(201).json({
      success: true,
      message: "Checklist saved successfully",
      checklist: newChecklist,
    });
  } catch (error) {
    next(error);
  }
};
