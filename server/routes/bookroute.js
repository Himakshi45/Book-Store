import express from "express";
const router = express.Router();
import {
  addBook,
  updateBook,
  deleteBook,
  getBook,
} from "../controllers/bookController.js";

router.route("/").get(getBook);
router.route("/").post(addBook);
router.route("/:id").patch(updateBook);
router.route("/:id").delete(deleteBook);
export default router;
