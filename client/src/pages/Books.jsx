import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { BookCard } from "../components";
import { Wrapper } from "./pagesStyles/LoginStyle";
import { getBooks, reset } from "../features/books/bookSlice";

const Books = () => {
  const dispatch = useDispatch();
  const { books, isError, message } = useSelector((state) => state.books);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getBooks());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);
  return (
    <Wrapper>
      <div>
        <ul>
          {books &&
            books.map((book) => (
              <li>
                <BookCard key={book.id} />
              </li>
            ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Books;
