import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Client from "../models/clientModel.js";

export const registerUser = async (req, res) => {
  try {
    const { name, phone, email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Save in users collection
    const user = await User.create({
      name,
      phone,
      email,
      password: hashedPassword,
      role,
    });

    // Save in clients collection (only for client role)
    if (role === "client") {
      await Client.create({
        clientId: user._id,    // reference to users table
        name,
        email,
        phone
      });
    }

    res.json({ msg: "Registration successful", user });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res.json({
      msg: "Login successful",
      token,
      user,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};
