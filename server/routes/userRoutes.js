const express = require("express");
const { getUsers, signUp, signIn, getSingleUser } = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.get("/users", getUsers);

userRouter.get("/users/:id", getSingleUser);

userRouter.post("/users/signup", signUp);

userRouter.post("/users/signin", signIn);


module.exports = userRouter;