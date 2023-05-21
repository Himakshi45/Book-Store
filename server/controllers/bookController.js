import Book from "../models/book.js";
import { v2 as cloudinary } from "cloudinary";

import mongoose from "mongoose";
const addBook = async (req, res) => {
  try {
    const { title, author, price, image } = req.body;
    
    if (!title||!author||!price||!image) throw new Error();
    const imageUrl = await cloudinary.v2.uploader.upload(image);
    //create books
    const newBook = await Book.create({
      title,
      author,
      price,
      image: imageUrl.url,
    });
    if (newBook){
      res.status(201).json({
        _id:newBook.id,
        title:newBook.title,
        author:newBook.author,
        price:newBook.price,
        image:newBook.image
      })
    }else{
      res.status(400)
      throw new Error("Enter the fields correctly")
    }
    

  } catch (error) {
    console.log(error)
  }
};

const updateBook = () => {};
const deleteBook = () => {};
const getBook = (request, response) => {
  response.send("hi");
};
export { addBook, updateBook, deleteBook, getBook };
