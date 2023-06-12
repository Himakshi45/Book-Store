import { Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
//import "./Book.css";
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
   const history = useNavigate();
  const { _id, name, author, description, price } = props.book;
   const deleteHandler = async () => {
     await axios
       .delete(`http://localhost:5000/api/h1/books/${_id}`)
      .then((res) => res.data)
     .then(() => history("/"))
     .then(() => history("/books"));
  };

  return (
    <div className="card">
     <img src="https://tolkiengateway.net/w/images/e/e4/The_Hobbit_2016-facsimile.jpeg"alt= "Hobbit" />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
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
