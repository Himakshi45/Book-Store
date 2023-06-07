import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './pagesStyles/AdminStyles';

const Admin =()=> {
 


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
                <Link to="/dashboard">
                    <button id="sub_btn" type="submit">Login</button>
                    </Link>
                </p>
            </form>
            </div>
        </Wrapper>
    );
};

export default Admin;
