import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./pagesStyles/BookPages";
import { getBooks } from "../features/books/bookSlice";
import BookCard from "../components/BookCard";

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, isError, message } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    if (isLoading) {
      console.log("Fetching Books");
    }

    if (isError) {
      console.log(message);
    }
    dispatch(getBooks());
  });

  return (
    <Wrapper>
      <div>HI</div>
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
