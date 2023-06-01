import express  from "express";
const router = express.Router();
import { createPayment, verifyPayment } from "../controllers/paymentController.js";

router.route("/orders").post(createPayment);
router.route("/orders").get(verifyPayment);

export default router;
