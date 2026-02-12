import express from "express";
import Design from "../models/designModel.js";

const router = express.Router();

// upload design
router.post("/upload", async (req, res) => {
  try {
    const { title, category, imageUrl } = req.body;

    const design = await Design.create({
      title,
      category,
      imageUrl
    });

    res.json(design);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get designs by category
router.get("/:category", async (req, res) => {
  const designs = await Design.find({ category: req.params.category });
  res.json(designs);
});

export default router;
