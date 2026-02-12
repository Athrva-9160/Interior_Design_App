import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Client from "../models/clientModel.js";
import Consultation from "../models/consultationModel.js";

const router = express.Router();

// ADMIN LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Admin is stored in users collection
  const admin = await User.findOne({ email, role: "admin" });
  if (!admin) return res.status(400).json({ msg: "Invalid admin credentials" });

  res.json({
    token: jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET),
    admin
  });
});

// FETCH ALL CLIENTS
router.get("/clients", async (req, res) => {
  try {
    const clients = await Client.find({}, { password: 0 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// FETCH ALL CONSULTATIONS + JOIN CLIENT DATA
router.get("/consultations", async (req, res) => {
  try {
    const list = await Consultation.find();

    const enriched = await Promise.all(
      list.map(async (c) => {
        const client = await Client.findById(c.clientId);

        return {
          consultationId: c._id,
          consultationDate: c.consultationDate,
          name: client.name,
          email: client.email,
          phone: client.phone
        };
      })
    );

    res.json(enriched);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
