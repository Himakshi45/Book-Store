import mongoose from "mongoose";
import  jwt from "jsonwebtoken";
import User from "../models/user.js";
const registerUser = (req,res) => {
    res.send("userRegister")

};
const loginUser = (req,res) => {
    res.send("userlogin")
};
const getUser = (req,res) => {
    res.send("getUser")
};

export { registerUser, loginUser, getUser };
