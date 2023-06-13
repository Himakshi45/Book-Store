import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const SingleBook = 
  ({ image, price,author, name, _Id }) => {
    return (
      <div className="book">
        <img src={image} alt={name} />
  
        <div className="book">
          <p className="name">{name}</p>
  
          <p className="author">{author}</p>
  
          <p className="price">Rs{price}</p>

          <Link to={`/cart/${_Id}`} className="button">
          <Button>  Add To cart</Button>
          </Link>
        </div>
      </div>
    );
  };

export default SingleBook;
