import express from "express";
import Consultation from "../models/consultationModel.js";
import Client from "../models/clientModel.js";

const router = express.Router();

// GET all consultations WITH client details
router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find()
      .populate("clientId", "name email phone"); // join Client table

    res.json(
      consultations.map((c) => ({
        consultationId: c._id,
        consultationDate: c.consultationDate,
        name: c.clientId?.name || "N/A",
        email: c.clientId?.email || "N/A",
        phone: c.clientId?.phone || "N/A",
      }))
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
