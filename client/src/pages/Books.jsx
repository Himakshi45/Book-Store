import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBooks } from "../features/books/bookSlice";
// import BookCard from "../components/mainCom/BookCard";

const Books = () => {
  const dispatch = useDispatch();

  const book = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  console.log(` ${book}`);

  return (
    <>
      <div>
        {book.loading && <div>Loading</div>}
        {!book.loading && book.error ? <div> Error : {book.error} </div> : null}
        {!book.loading && book.books.length ? (
          <ul>
            {book.books.map((book) => (
              <li key={book._id}>{book.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Books;
