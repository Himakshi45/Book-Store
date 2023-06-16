import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import { Wrapper } from "./pagesStyles/LoginStyle";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

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
      console.log("Register Working");
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
      name,
      email,
      password,
    };
    dispatch(register(userData));
  };

  return (
    <Wrapper>
      <div className="text-center m-5-auto">
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form onSubmit={onSubmit}>
          <p>
            <label>Username</label>

            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </p>
          <br />
          <p>
            <label>Email address</label>

            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </p>
          <br />
          <p>
            <label>Password</label>
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
              Register
            </button>
          </p>
          <br />
        </form>
        <footer>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Register;
