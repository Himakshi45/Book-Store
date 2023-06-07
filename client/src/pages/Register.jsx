<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
//import './App.css'
const Register = ()=> {
const Wrapper= styled.section`
padding: 9rem 0 5rem 0;
    text-align: center;

#checkbox {
  width: 1rem
}

form span {
  font-size: .8rem
}

#reset_pass_lbl {
  float: left
}
`;



    return (
      <Wrapper>
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </Wrapper>
    );
    }
    export default  Register
=======
import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./pagesStyles/LoginStyle";
import "../App.css";
const Register = () => {
  return (
    <Wrapper>
      <div className="text-center m-5-auto">
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form action="/home">
          <p>
            <label>Username</label>
            <br />
            <input type="text" name="first_name" required />
          </p>
          <p>
            <label>Email address</label>
            <br />
            <input type="email" name="email" required />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input type="password" name="password" requiredc />
          </p>
          <p>
            <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
            <span>
              I agree all statements in{" "}
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms of service
              </a>
            </span>
            .
          </p>
          <p>
            <button id="sub_btn" type="submit">
              Register
            </button>
          </p>
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
>>>>>>> 3021ed56995299fb10fac7f04df85eed5e09b101
