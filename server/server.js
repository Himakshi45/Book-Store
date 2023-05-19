import express from "express";
import connectDB from "./mongoDB/db.js";
import dotenv from "dotenv";
import bookroute from "./routes/bookroute.js";
import userroute from "./routes/userroute.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;
dotenv.config();
const app = express();

//middleware function
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.send("Hi");
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

startServer();
