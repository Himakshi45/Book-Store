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

  image: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  createdAt:{
    type: Date,
    default: Date.now
  }
});
const bookSchema = mongoose.model("Book", bookModel);
export default bookSchema;
