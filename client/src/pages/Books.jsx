import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
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
      <nav>
        <Link to="new">New</Link>
        <Link to="latest">Latest</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Books;
