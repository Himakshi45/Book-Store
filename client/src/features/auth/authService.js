//this file is used for http requests
import axios from "axios";

const API_URL = "/api/h1/users/";

//Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // check response data is there
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

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
