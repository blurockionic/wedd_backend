
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo/index.js";
import { v4 as uuidv4 } from "uuid";
import z from "zod";

const mongoPrisma = new MongoClient();


const validateFaq = z.object({
  question: z.string().trim().min(1, "Question is required"),
  answer: z.string().trim().min(1, "Answer is required"),
});

export const upsertFaq = async (req, res, next) => {
  try {
    const serviceId = req.params.serviceId; // Adjusted for clarity
    const faqId = req.params.faqId; // Adjusted for clarity
    const vendorId = req.user.id;

    // Validate the input (either a single FAQ or an array of FAQs)
    const isBulk = Array.isArray(req.body);
    const validatedFaqs = isBulk
      ? req.body.map((faq) => validateFaq.parse(faq))
      : [validateFaq.parse(req.body)];

    // Fetch the service
    const service = await mongoPrisma.service.findFirst({
      where: { id: serviceId, vendorId },
    });

    if (!service) {
      return res.status(404).json({ message: "Service not found." });
    }

    // Ensure `faqs` is always an array
    const existingFaqs = Array.isArray(service.faqs) ? service.faqs : [];
    let updatedFaqs;

    if (faqId) {
      // Update a specific FAQ
      const faqExists = existingFaqs.some((faq) => faq.id === faqId);
      if (!faqExists) {
        return res.status(404).json({ message: "FAQ not found." });
      }

      updatedFaqs = existingFaqs.map((faq) =>
        faq.id === faqId
          ? { ...faq, question: validatedFaqs[0].question, answer: validatedFaqs[0].answer }
          : faq
      );
    } else {
      // Create new FAQs (single or multiple)
      const newFaqs = validatedFaqs.map((faq) => ({
        id: uuidv4(),
        question: faq.question,
        answer: faq.answer,
      }));

      updatedFaqs = [...existingFaqs, ...newFaqs];
    }

    // Update the service with the new or updated FAQs
    const updatedService = await mongoPrisma.service.update({
      where: { id: serviceId },
      data: { faqs: updatedFaqs },
    });

    res.status(200).json({
      success: true,
      message: faqId
        ? `FAQ updated successfully.`
        : isBulk
        ? "FAQs created successfully."
        : "FAQ created successfully.",
      data: updatedService,
    });
  } catch (error) {
    console.error("Error upserting FAQ:", error);
    next(error);
  }
};
// Delete FAQ
export const deleteFaq = async (req, res, next) => {
  try {
    const serviceId = req.params.serviceId;
    const faqId = req.params.faqId;

    const service = await mongoPrisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!service) {
      return res.status(404).json({ message: "Service not found." });
    }

    const updatedFaqs = service.faqs.filter((faq) => faq.id !== faqId);

    const updatedService = await mongoPrisma.service.update({
      where: { id: serviceId },
      data: { faqs: updatedFaqs },
    });

    res.status(200).json({
      success: true,
      message: "FAQ deleted successfully.",
      data: updatedService,
    });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    next(error);
  }
};
