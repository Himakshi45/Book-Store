import Book from "../models/book.js";

//addbook for  admin
const addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json({
    success: true,
    book,
  });
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
      success: true,
      message: "Book Removed",
    });
  } catch (error) {
    console.log(error);
  }
};
const getBook = async (req, res) => {
  const books = await Book.find();
  res.status(200).json({
    success: true,
    books,
  });
};
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
export { addBook, updateBook, deleteBook, getBook, getBookDetail };
