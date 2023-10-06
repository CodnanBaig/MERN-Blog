const Blog = require("../models/blogModel");

exports.postBlog = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const new_blog = await Blog.create({ ...body, userId: req.user.id });
    return res.status(201).json(new_blog);
  } catch (error) {
    console.log(error);
    res.status(403).json(error);
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json(blogs);
  } catch (error) {
    res.status(403).json(error);
  }
};
