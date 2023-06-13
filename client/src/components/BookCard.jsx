import { Button } from "@mui/material";

import { Link } from "react-router-dom";

const BookCard = ({ book: _id, name, author, price, image }) => {
  return (
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
  );
};

export default BookCard;