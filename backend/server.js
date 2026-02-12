import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import designRoutes from "./routes/designRoutes.js";
import likedRoutes from "./routes/likedRoutes.js";
import "./models/user.js";
import "./models/clientModel.js";
import adminClientRoutes from "./routes/adminClientRoutes.js";
import adminConsultationRoutes from "./routes/adminConsultationRoutes.js";
import consultationRoutes from "./routes/consultationRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

// Import routes
import userRoutes from "./routes/userRoutes.js";

app.use("/api/clients", clientRoutes);
app.use("/api/users", userRoutes);
app.use("/api/designs", designRoutes);
app.use("/api/liked", likedRoutes);
app.use("/api/admin/clients", adminClientRoutes);
app.use("/api/admin/consultations", adminConsultationRoutes);
app.use("/api/consultations", consultationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/clients", clientRoutes);


dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB()
    console.log(`Backend running on port ${PORT}`);
});
