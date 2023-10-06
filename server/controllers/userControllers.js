const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.signUp = async (req, res) => {
  const body = req.body;
  try {
    const existing_user = await User.findOne({ email: body.email });
    if (existing_user) {
      return res.status(404).json({ message: "User exists" });
    }
    const hashed_pass = await bcrypt.hash(body.password, 10);
    const new_user = await User.create({
      name: body.name,
      email: body.email,
      password: hashed_pass,
    });
    const token = jwt.sign({ id: new_user._id }, "secretkey", {
      expiresIn: "5h",
    });

    return res.status(201).json({ token: token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

exports.signIn = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res.status(404).json({ message: "Invalid Credentials" });
    }
    const compare_pass = await bcrypt.compare(body.password, user.password);
    if (!compare_pass) {
      return res.status(404).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "5h" });
    return res.status(201).json({ token: token });
  } catch (error) {}
};
