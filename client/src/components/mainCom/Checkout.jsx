import React, { useEffect } from "react";
import { Wrapper } from "./MainComStyle/CartStyles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <Wrapper>
      <div>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form action="/action_page.php">
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="John "
                    />
                    <label htmlFor="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                    />
                    <label htmlFor="adr">
                      <i className="fa fa-address-card-o"></i> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="Jayangar"
                    />
                    <label htmlFor="city">
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Karnataka"
                    />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="India"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Zip</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="560041"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="fname">Accepted Cards</label>
                    <div class="img-box">
                      <img
                        src="https://w7.pngwing.com/pngs/93/992/png-transparent-razorpay-logo-tech-companies.png"
                        alt=""
                        width="96"
                        height="65"
                      ></img>
                    </div>
                    <label htmlFor="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="John More Doe"
                    />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label htmlFor="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                    />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2025"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="352"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input type="checkbox" checked="checked" name="sameadr" />{" "}
                  Shipping address same as billing
                </label>
                <input type="submit" value="Checkout" className="btn" />
              </form>
            </div>
          </div>
          <div className="col-25">
            <div className="container">
              <h4>
                Cart{" "}
                <span className="price" style={{ color: "black" }}>
                  <i className="fa fa-shopping-cart"></i> <b>4</b>
                </span>
              </h4>
              <p>
                <Link to="/"></Link> <span className="price">INR 150</span>
              </p>
              <p>
                <Link to="/"></Link> <span className="price">INR 350</span>
              </p>
              <p>
                <Link to="/"></Link>
                <span className="price" style={{ color: "black" }}>
                  <b>INR 500</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
