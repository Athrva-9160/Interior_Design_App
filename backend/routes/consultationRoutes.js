import express from "express";
import Consultation from "../models/consultationModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { clientId, consultationDate } = req.body;

    if (!clientId || !consultationDate) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    const saved = await Consultation.create({
      clientId,
      consultationDate,
    });

    res.json(saved);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

export default router;
