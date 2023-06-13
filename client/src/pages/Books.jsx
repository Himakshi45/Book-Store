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
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {message}</p>;
  }

  return (
    <Wrapper>
      
      <div>
        <ul>
          {books.length > 0 ? (
            <>
              {books.map((book) => (
                <BookCard key={book._id} book={book} />
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
