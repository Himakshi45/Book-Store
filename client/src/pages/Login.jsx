import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
//import './App.css'
const Login = ()=> {
const Wrapper= styled.section`
padding: 9rem 0 5rem 0;
    text-align: center;

h2 {
    font-weight: 300
}

form {
    display: inline-block;
    background: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 8rem;
    margin: 2rem 0 1rem 0
}

form label {
    float: left;
    font-size: .9rem;
    margin: 0;
    padding: 0
}

.middle-label {
    float: middle;
    cursor: pointer
}

input {
    width: 20rem;
    padding: .3rem;
    border-radius: 10px;
    outline: none;
    border: none
}

#sub_btn {
    display: block;
    width: 100%;
    padding: .3rem;
    border: none;
    background: #222;
    color: #fff;
    border-radius: 3px;
}

#sub_btn:hover {
    background: #333;
    transition: all .5s
}

footer p {
    margin: 0;
    font-size: .9rem
}
`;


    return (
        <Wrapper>
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to ="/admin">Are You a Seller?</Link></p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </Wrapper>
    );
};

export default Login;