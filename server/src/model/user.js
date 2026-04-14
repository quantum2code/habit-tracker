import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "Prefer not to say"] },
  age: { type: Number, min: 0 },
}, { timestamps: true });

export default mongoose.model("User", userSchema);