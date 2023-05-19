import Book from "../models/book.js";
import { v2 as cloudinary } from "cloudinary";

import mongoose from "mongoose";
const addBook = async (req, res) => {
  try {
    const { title, author, price, image } = req.body;
    const session = await mongoose.startSession();
    session.startTransaction();
    if (!title && author && price && image) throw new Error();
    const imageUrl = await cloudinary.v2.uploader.upload(image);
    //create books
    const newBook = await Book.create({
      title,
      author,
      price,
      image,
    });
    await newBook.save();
    await session.commitTransaction();
    res.status(200).json({ message: "Success created" });
  } catch (error) {
    res.status(500).json({ message: "not created" });
  }
};

const updateBook = () => {};
const deleteBook = () => {};
const getBook = (request, response) => {
  response.send("hi");
};
export { addBook, updateBook, deleteBook, getBook };
