import connectDB from "./configs/db.js";
import userRoutes from "./routes/userRoutes.js";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();


const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/", userRoutes);

app.get("/", (req, res, next) => {
  res.send("Server is running");
});

