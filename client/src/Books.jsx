import React, { useEffect, useState } from "react";

import axios from "axios";
import BookCard from "./components/BookCard";
import styled from "styled-components";
const URL = "http://localhost:5000/api/h1/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
ul {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
}
li {
  padding: 10px;
  margin: 10px;
  width: 250px;
  max-width: 250px;
  max-height: 400px;
  list-style-type: none;
  justify-content: flex-start;
}

.card {
  margin: auto;
  padding: 5px;
  height: 100%;
  width: 100%;
  box-shadow: 5px 5px 10px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start;
  align-content: flex-start; */
}
.card > img {
  width: 100%;
  height: 50%;
}
.card article {
  padding: 5px;
}
.card h3 {
  padding: 4px;
}

.card p {
  padding: 3x;
}
  
`;

  
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