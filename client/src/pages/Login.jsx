import "../App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";

import { Wrapper } from "./pagesStyles/LoginStyle";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isLoading) {
      console.log("...Loading");
    }
    if (isSuccess || user) {
      console.log("Register SuccessFully 🎉🎉");
      navigate("/");
      //naviage to / or checkout page or login page confuss
    }
    if (isError) {
      console.log(message);
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <Wrapper>
      <div className="text-center m-5-auto">
        <h2>Sign in to us</h2>
        <form onSubmit={onSubmit}>
          <p>
            <label>Email address</label>
            <br />
            <input
              type="text"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </p>
          <br />
          <p>
            <label>Password</label>
            <Link to="/forget-password">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </p>
          <br />
          <p>
            <button id="sub_btn" type="submit">
              Login
            </button>
          </p>
        </form>
        <footer>
          <p>
            First time? <Link to="/register">Create an account</Link>.
          </p>
          <p>
            <Link to="/admin">Are You a Seller?</Link>
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Login;
