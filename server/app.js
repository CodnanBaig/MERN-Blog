const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api", userRouter);


mongoose
  .connect(
    "mongodb+srv://adnan_masai:adnan_masai@cluster0.prihoqb.mongodb.net/MERN-Blog"
  )
  .then(() => app.listen(8888))
  .then(() => console.log("Listening on 8888"))
  .catch((err) => console.log(err));
