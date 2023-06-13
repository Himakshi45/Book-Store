//this file is used for http requests
import axios from "axios";

const API_URL_REGISTER = "http://localhost:5000/api/h1/users/register";
const API_URL_LOGIN = "http://localhost:5000/api/h1/users/login";
//Register User
const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData);

  // check response data is there
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login User
const login = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData);

  // check response data is there
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
  login,
};
export default authService;
