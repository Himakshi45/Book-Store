import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

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
    <div className="books">
      <BookCard />
    </div>
  );
};

export default Books;
