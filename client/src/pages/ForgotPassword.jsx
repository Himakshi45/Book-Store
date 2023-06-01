import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
const ForgotPassword= ()=> {
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
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </Wrapper>
    );
}
export default ForgotPassword;