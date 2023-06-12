import Book from "../models/book.js";
import cloudinary from "cloudinary";

//GET all books
// API - /api/h1/books
//public
const getBook = async (req, res) => {
  const books = await Book.find({ user: req.user.id });
  res.status(200).json({
    success: true,
    books,
  });
};

//GET book
// API - /api/h1/books
//public
const getBookDetail = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(500);
    throw new Error("Book not found");
  }
  res.status(200).json({
    success: true,
    book,
  });
};

//addbook for  admin
const addBook = async (req, res) => {
  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  const imagesLinks = [];
  for (let i = 0; i < images.length; i++) {
    const picSave = await cloudinary.v2.uploader.upload(images[i], {
      folder: "books",
    });
    imagesLinks.push({
      public_id: picSave.public_id,
      url: picSave.secure_url,
    });
  }
  req.body.images = imagesLinks;
  req.body.user = req.user;

  const book = await Book.create(req.body);
  res.status(201).json({
    success: true,
    book,
  });
  if (!req.body.book) {
    res.status(400);
    throw new Error(" Enter the fields correctly");
  }
};
//update book for admin
const updateBook = async (req, res, next) => {
  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      res.status(500);
      throw new Error("Book not found");
    }
    book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      book,
    });
  } catch (error) {
    console.log(error);
  }
};
//by admin
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(500);
      throw new Error("Book not found");
    }
    await book.remove(req.params.id);
    res.status(200).json({
      id: req.params.id,
      success: true,
      message: "Book Removed",
    });
  } catch (error) {
    console.log(error);
  }
};

export { addBook, updateBook, deleteBook, getBook, getBookDetail };
