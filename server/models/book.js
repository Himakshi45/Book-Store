import mongoose from "mongoose";
const bookModel = new mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const bookSchema = mongoose.model("Book", bookModel);
export default bookSchema;
