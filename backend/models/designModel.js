import mongoose from "mongoose";

const designSchema = new mongoose.Schema({
  title: String,
  category: String,
  imageUrl: String,
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Design", designSchema);
