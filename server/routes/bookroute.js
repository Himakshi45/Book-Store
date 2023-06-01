import express from "express";
const router = express.Router();
import {
  addBook,
  updateBook,
  deleteBook,
  getBook,
  getBookDetail,
} from "../controllers/bookController.js";

router.route("/").get(getBook);
router.route("/book/new").post(addBook);
router.route("/:id").patch(updateBook);
router.route("/:id").delete(deleteBook);
router.route("/:id").get(getBookDetail);
export default router;
