import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { Wrapper } from "./ComponentStyles/BookCardStyles";
const BookCard = ({ book: _id, name, author, price, image }) => {
  return (
    <Wrapper>
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>

      <h3>Rs {price}</h3>
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