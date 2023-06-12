import axios from "axios";
const API_URL = "http://localhost:5000/api/h1/books/book/new";
const API_URL1 = "http://localhost:5000/api/h1/books/";

const addBook = async (myForm) => {
  try {
    const response = await axios.post(API_URL, myForm);
    return response.data;
  } catch (error) {
    console.log("add book is not working in service");
  }
};

// Get user goals
const getBooks = async (token) => {
  try {
    const response = await axios.get(API_URL1);

    return response.data;
  } catch (error) {
    console.log("get all book is not working in service");
  }
};
const bookService = {
  addBook,
  getBooks,
};
export default bookService;
