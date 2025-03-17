import Template from "../models/Template.js";

export const saveTemplate = async (req, res) => {
  const { title1, title2, brideName, groomName, weddingDate, weddingTime, weddingLocation, description } = req.body;
  try {
    await Template.deleteMany({});
    const newTemplate = new Template({
      title1,
      title2,
      brideName,
      groomName,
      weddingDate,
      weddingTime,
      weddingLocation,
      description,
    });
    
    await newTemplate.save();
    res.status(201).json({ message: 'Template saved successfully!' ,newTemplate});
  } catch (error) {
    console.error('Error saving template:', error);
    res.status(500).json({ message: 'Failed to save template.' });
  }
};

export const getLatestTemplate = async (req, res) => {
  try {
    const latestTemplate = await Template.find().sort({ createdAt: -1 });

    if (!latestTemplate) {
      return res.status(404).json({ message: "No template found" });
    }

    res.status(200).json(latestTemplate);
  } catch (error) {
    console.error("Error fetching template:", error);
    res.status(500).json({ message: "Failed to fetch template." });
  }
};