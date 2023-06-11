import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, TextField, FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import "../App.css";
import { addBooks } from "../features/books/bookSlice";
const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();

  const { books, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    if (isLoading) {
      console.log("Loading");
    }

    if (isError) {
      console.log(message);
    }
  }, [books, isError, isLoading, isSuccess, message]);

  const onSubmitBookForm = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("author", author);
    myForm.set("price", price);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(addBooks(myForm));
  };

  const imageAddHere = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((old) => [...old, reader.picSave]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <form onSubmit={onSubmitBookForm}>
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
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel>Author</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <FormLabel>Price</FormLabel>
        <TextField
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormLabel>Image</FormLabel>
        <TextField
          type="file"
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          accept="image/*"
          multiple
          onChange={imageAddHere}
        />

        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
