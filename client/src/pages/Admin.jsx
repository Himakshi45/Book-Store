<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
const Admin =()=> {
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
=======
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",

    price: "",
    author: "",

    image: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/api/h1/books/book/new", {
        name: String(inputs.name),
        author: String(inputs.author),
        price: Number(inputs.price),
        image: String(inputs.image),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/api/h1/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />

        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />

        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default Admin;
>>>>>>> 3021ed56995299fb10fac7f04df85eed5e09b101
