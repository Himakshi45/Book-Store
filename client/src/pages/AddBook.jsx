import React from 'react'
import { Button, TextField, FormLabel} from "@mui/material";
import { Box } from "@mui/system";
import "../App.css"
const AddBook = () => {
  return (
    <form>
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
          />
          <FormLabel>Author</FormLabel>
          <TextField
    
            
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
          />
          
          <FormLabel>Price</FormLabel>
          <TextField

    
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <FormLabel>Image</FormLabel>
          <TextField
            
            type="file"
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
        
  
          <Button variant="contained" type="submit">
            Add Book
          </Button>
        </Box>
      </form>
    );
  };
  


export default AddBook