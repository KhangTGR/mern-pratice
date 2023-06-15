import express from "express";

import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

import userRoutes from "./routes/userRoutes.js";

import connectDB from "./configs/db.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res, next) => res.send("Server is ready!"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, (message) => {
  console.log(`Server started on port ${port}`);
});
