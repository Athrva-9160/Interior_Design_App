import mongoose from "mongoose";

const likedSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  designId: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likedAt: { type: Date, default: Date.now }
});

export default mongoose.model("LikedDesign", likedSchema);
