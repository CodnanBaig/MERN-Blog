const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config()
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api", userRouter);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    process.env.MONGODB)
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log(`Listening on ${process.env.PORT}`))
  .catch((err) => console.log(err));
