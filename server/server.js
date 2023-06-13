import express from "express";
import connectDB from "./mongoDB/db.js";
import dotenv from "dotenv";
import bookroute from "./routes/bookroute.js";
import userroute from "./routes/userroute.js";
import paymentroute from "./routes/paymentroute.js";
import orderroute from "./routes/orderroute.js";
import cors from "cors";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";

import { errorHandler } from "./middleware/errorHandler.js";

const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(fileUpload());
app.get("/", (request, response) => {
  response.send("Hi");
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const startServer = async () => {
  try {
    connectDB(process.env.mongo_url);
    app.listen(PORT, () => {
      console.log(`listening at http://localhost:${PORT}`);
    });
  } catch (error) {}
};

//apis middleware
app.use("/api/h1/books", bookroute);
app.use("/api/h1/users", userroute);
app.use("/api/h1/payment", paymentroute);
app.use("/api/h1/orders", orderroute)
//error Handler
app.use(errorHandler);

startServer();
