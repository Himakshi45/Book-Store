import axios from "axios";
const API_URL = "http://localhost:5000/api/h1/books/book/new";

const addBook = async (myForm) => {
  try {
    const response = await axios.post(API_URL, myForm);
    return response.data;
  } catch (error) {
    console.log("error cause in bookService");
  }
};
const bookService = {
  addBook,
};
export default bookService;
