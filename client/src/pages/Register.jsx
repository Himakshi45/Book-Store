import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./pagesStyles/LoginStyle";
import "../App.css";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData();
  };

  const onSubmit = () => {};

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
              autocomplete="on"
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
              autocomplete="on"
              required
            />
          </p>
          <br />
          <p>
            <label>Password</label>
            <input type="password" name="password" value={password} required />
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
