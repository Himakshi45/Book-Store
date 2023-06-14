import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Wrapper } from "./pagesStyles/BookPages";
import { getBooks, reset } from "../features/books/bookSlice";
import BookCard from "../components/BookCard";

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, isError, message } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getBooks());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    console.log("Loading...");
  }

  console.log(` ${books}`);

  return (
    <Wrapper>
      <h3>All Books</h3>
      <div className="books">
        {Object.keys(books).map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Books;
