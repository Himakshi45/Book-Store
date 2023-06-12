import Book from "../models/book.js";
import cloudinary from "cloudinary";

// GET all books
// API - /api/h1/books
// Public
const getBook = async (req, res) => {
  try {
    const books = await Book.findById(req.params.id);
    res.status(200).json({
      success: true,
      books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Failed to fetch books' });
  }
};

// GET book
// API - /api/h1/books/:id
// Public
const getBookDetail = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ success: false, error: 'Book not found' });
      return;
    }
    res.status(200).json({
      success: true,
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Failed to fetch book' });
  }
};

// Add book for admin
const addBook = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Failed to add book' });
  }
};

// Update book for admin
const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ success: false, error: 'Book not found' });
      return;
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      book: updatedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Failed to update book' });
  }
};

// Delete book for admin
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ success: false, error: 'Book not found' });
      return;
    }
    await book.remove();
    res.status(200).json({
      success: true,
      message: "Book Removed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Failed to delete book' });
  }
};

export { addBook, updateBook, deleteBook, getBook, getBookDetail };
