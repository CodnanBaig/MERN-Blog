const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv').config()
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

const app = express();
app.use(morgan("tiny"))
app.use(cors());
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", blogRouter);



mongoose.set("strictQuery", false);
mongoose
  .connect(
    process.env.MONGODB)
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log(`Listening on ${process.env.PORT}`))
  .catch((err) => console.log(err));
