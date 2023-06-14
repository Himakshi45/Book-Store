import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { Wrapper } from "../pages/pagesStyles/BookPages";

const BookCard = ({ book }) => {
  return (
    <Wrapper>
      <div className="card">
        {/* <img src={book.images[0].url} alt={book.name} />
        <article>By {book.author}</article> */}
        <h3>{book.name}</h3>
        <h3>Rs {book.price}</h3>
        <Button LinkComponent={Link} to={`/cart`} sx={{ mt: "auto" }}>
          Add to Cart
        </Button>
        <Button LinkComponent={Link} to={`/singlebook`} sx={{ mt: "auto" }}>
          See Details
        </Button>
      </div>
    </Wrapper>
  );
};

export default BookCard;

// image, name, author, price
