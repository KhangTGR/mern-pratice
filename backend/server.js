const connectDB = require("./configs/db.js");
const userRoutes = require("./routes/userRoutes.js");

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/", userRoutes);

app.get("/", (req, res, next) => {
  res.send("Server is running!");
});

app.listen(PORT, () => console.log("server is running at port : " + PORT));
