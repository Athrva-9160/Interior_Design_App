import express from "express";
import Client from "../models/clientModel.js";

const router = express.Router();

// MUST BE FIRST
router.get("/user/:userId", async (req, res) => {
  try {
    const client = await Client.findOne({ clientId: req.params.userId });

    if (!client) {
      return res.status(404).json({ msg: "Client not found" });
    }

    res.json(client);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// GET all clients
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find({}, { password: 0 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// GET client by Client Document ID
router.get("/id/:clientId", async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientId);

    if (!client) {
      return res.status(404).json({ msg: "Client not found" });
    }

    res.json(client);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

export default router;
