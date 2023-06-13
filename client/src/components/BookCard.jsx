import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Wrapper } from "./ComponentStyles/BookCardStyles";

const BookCard = (props) => {
  const { _id, name, author, price, image, additionalProp } = props.book;

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
        <p>Additional Prop: {additionalProp}</p> {/* Render additional prop */}
      </div>
    </Wrapper>
  );
};

export default BookCard;
