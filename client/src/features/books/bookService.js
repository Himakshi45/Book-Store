import axios from "axios";
const API_URL = "http://localhost:5000/api/h1/books/book/new";
const API_URL_GETBOOKS = "http://localhost:5000/api/h1/books/books";
// const API_URL_GETBOOKS = "https://jsonplaceholder.typicode.com/users";

const addBook = async (myForm, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, myForm, config);
  return response.data;
};
const getBooks = async (_, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL_GETBOOKS, config);
  return response.data;
};
const bookService = {
  addBook,
  getBooks,
};
export default bookService;
