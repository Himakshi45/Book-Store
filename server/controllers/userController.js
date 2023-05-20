import mongoose from "mongoose";
import  jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcryptjs"
const registerUser = async(req,res) => {
   try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Enter all the field");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("Already Register");
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create the user
    const user = await User.create({
        name, 
        email,
        password: hashedPassword
    })
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error("invalid")
    }
   } catch (error) {
    console.log(error);
   }

};
const loginUser = (req,res) => {
    res.send("userlogin")
};
const getUser = (req,res) => {
    res.send("getUser")
};

export { registerUser, loginUser, getUser };
