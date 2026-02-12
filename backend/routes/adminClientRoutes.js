import express from "express";
import Client from "../models/clientModel.js";

const router = express.Router();

// GET all clients
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find({}, { password: 0 });

    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
