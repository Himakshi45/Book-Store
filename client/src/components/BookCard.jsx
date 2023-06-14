import { Link } from "react-router-dom";
import "./BookPages.css";

const BookCard = () => {
  return (
    <div class="container">
      <h3 class="title">All Books</h3>
      <div className="products-container">
        <div className="product" data-name="p-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/himakshi-f997f.appspot.com/o/1.jpeg?alt=media&token=94816f85-d003-453e-86d8-ba81ea19c16c"
            alt=""
          />
          <h3>The God of little things</h3>
          <div className="price" />
          <div className="buttons">
            <Link to="#" className="buy">
              {" "}
              Buy Now
            </Link>

            <Link to="#" className="cart">
              {" "}
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="product" data-name="p-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/himakshi-f997f.appspot.com/o/2.jpeg?alt=media&token=222a3b66-eec2-483b-9c7e-c78887de121a"
            alt=""
          />
          <h3>Meluha</h3>
          <div className="price" />
          <div className="buttons">
            <Link to="#" className="buy">
              {" "}
              Buy Now
            </Link>

            <Link to="#" className="cart">
              {" "}
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="product" data-name="p-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/himakshi-f997f.appspot.com/o/3.jpeg?alt=media&token=b004081f-daf7-4eee-9bd9-a003472bfbd1"
            alt=""
          />
          <h3>Sudha Murty</h3>
          <div className="price" />
          <div className="buttons">
            <Link to="#" className="buy">
              {" "}
              Buy Now
            </Link>

            <Link to="#" className="cart">
              {" "}
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="product" data-name="p-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/himakshi-f997f.appspot.com/o/4.jpeg?alt=media&token=d9580f95-a46f-42ea-b053-5d8598d74930"
            alt=""
          />
          <h3>Ikigai</h3>
          <div className="price" />
          <div className="buttons">
            <Link to="#" className="buy">
              {" "}
              Buy Now
            </Link>

            <Link to="#" className="cart">
              {" "}
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="product" data-name="p-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/himakshi-f997f.appspot.com/o/5.jpeg?alt=media&token=acc2f466-90b1-43a2-92ab-71f79e7e7148"
            alt=""
          />
          <h3>Ruskin Boon</h3>
          <div className="price" />
          <div className="buttons">
            <Link to="#" className="buy">
              {" "}
              Buy Now
            </Link>

            <Link to="#" className="cart">
              {" "}
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="product" data-name="p-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/himakshi-f997f.appspot.com/o/6.jpeg?alt=media&token=f57aaa4d-773d-480b-bd54-4c4b7a18a11d"
            alt=""
          />
          <h3>Paulo Coelho</h3>
          <div className="price" />
          <div className="buttons">
            <Link to="#" className="buy">
              {" "}
              Buy Now
            </Link>

            <Link to="#" className="cart">
              {" "}
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

// image, name, author, price
