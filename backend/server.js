import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";

// Routes
import adminClientRoutes from "./routes/adminClientRoutes.js";
import adminConsultationRoutes from "./routes/adminConsultationRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import consultationRoutes from "./routes/consultationRoutes.js";
import designRoutes from "./routes/designRoutes.js";
import likedRoutes from "./routes/likedRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Models
import "./models/clientModel.js";
import "./models/user.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/designs", designRoutes);
app.use("/api/liked", likedRoutes);
app.use("/api/admin/clients", adminClientRoutes);
app.use("/api/admin/consultations", adminConsultationRoutes);
app.use("/api/consultations", consultationRoutes);
app.use("/api/admin", adminRoutes);

// Serve React build (Vite -> dist folder)
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all to serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Backend running on port ${PORT}`);
});
