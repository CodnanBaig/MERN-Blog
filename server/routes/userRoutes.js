const express = require("express");
const { getUsers, signUp, signIn } = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.get("/users", getUsers);

userRouter.post("/users/signup", signUp);

userRouter.post("/users/signin", signIn);


module.exports = userRouter;