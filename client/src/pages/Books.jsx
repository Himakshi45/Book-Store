import React, { useEffect, useState } from "react";

import axios from "axios";

import { BookCard } from "../components";
import { Wrapper } from "./pagesStyles/LoginStyle";

const URL = "http://localhost:5000/api/h1/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <Wrapper>
      <div>
        <ul>
          {books &&
            books.map((book, i) => (
              <li key={i}>
                <BookCard book={book} />
              </li>
            ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Books;
