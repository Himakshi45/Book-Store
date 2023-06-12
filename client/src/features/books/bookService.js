import axios from "axios";
const API_URL = "http://localhost:5000/api/h1/books/book/new";

const addBook = async (myForm, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, myForm, config);
  return response.data;
};
const bookService = {
  addBook,
};
export default bookService;
