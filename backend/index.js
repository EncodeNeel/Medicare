import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("API is working");
});

// MongoDB connection
const mongoURL = process.env.MONGO_URL;

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDB database is connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
