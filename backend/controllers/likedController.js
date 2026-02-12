import LikedDesign from "../models/likedDesignModel.js";

// Like a design
export const likeDesign = async (req, res) => {
  try {
    const { userId, designId, category, title, imageUrl } = req.body;

    const exists = await LikedDesign.findOne({ userId, designId });
    if (exists) return res.json(exists);

    const liked = await LikedDesign.create({
      userId,
      designId,
      category,
      title,
      imageUrl
    });

    res.json(liked);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Unlike
export const unlikeDesign = async (req, res) => {
  try {
    const { userId, designId } = req.body;

    await LikedDesign.findOneAndDelete({ userId, designId });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all liked designs for user + category
export const getLikedByCategory = async (req, res) => {
  try {
    const { userId, category } = req.params;

    const data = await LikedDesign.find({ userId, category });

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
