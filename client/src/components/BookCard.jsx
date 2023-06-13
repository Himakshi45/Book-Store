import { Button } from "@mui/material";

import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <img src={book.image} alt="" />
      <article>By {book.author}</article>
      <h3>{book.name}</h3>
      <h3>Rs {book.price}</h3>
      <Button LinkComponent={Link} to={`/cart`} sx={{ mt: "auto" }}>
        Add to Cart
      </Button>
      <Button LinkComponent={Link} to={`/singlebook`} sx={{ mt: "auto" }}>
        See Details
      </Button>
      console.log(book.name)
    </div>
  );
};

export default BookCard;
