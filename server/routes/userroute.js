import express  from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  getUser,
} from "../controllers/userController.js";
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/user").get(getUser);

export default router;
