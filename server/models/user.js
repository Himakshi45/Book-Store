import mongoose from "mongoose";
import validator from "validator";
const userModel = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, validator: [validator.isEmail] },
    password: { type: String, select: false },
    password2: { type: String, select: false },
  },
  {
    timestamps: true,
  },
  {
    role: {
      type: String,
      default: "user",
    },
  }
);
const userSchema = mongoose.model("User", userModel);
export default userSchema;
