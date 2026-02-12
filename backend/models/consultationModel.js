import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",   // correct reference
    required: true
  },

  consultationDate: {
    type: Date,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Consultation", consultationSchema);
