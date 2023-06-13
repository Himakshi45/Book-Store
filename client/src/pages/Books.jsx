import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Wrapper } from "./pagesStyles/BookPages";
import { getBooks } from "../features/books/bookSlice";
import BookCard from "../components/BookCard";

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    if (isLoading) {
      console.log("Fetching Books");
    }
    if (isSuccess) {
      console.log("Fetched Successfully 🎉");
    }
    if (isError) {
      console.log(message);
    }
    return dispatch(getBooks());
  }, [isError, isLoading, isSuccess, message, dispatch]);
  return (
    <Wrapper>
      <div>
        <ul>
          {books.length > 0 ? (
            <>
              {books.map((book) => (
                <BookCard key={book._id} book={books} />
              ))}
            </>
          ) : (
            <h4>Network Error🤒</h4>
          )}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Books;