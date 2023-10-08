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

exports.getBlogById = async (req, res) => {
  const {id} = req.params;
  try {
    const blog = await Blog.findById(id);
    return res.status(200).json(blog);
  } catch (error) {
    res.status(403).json(error);
  }
}

exports.updateBlog = async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  try {
    const updated_blog = await Blog.findByIdAndUpdate(id, body);
    return res.status(200).json({message: "Updated Successfuly", updated_blog});
  } catch (error) {
    res.status(403).json(error);
  }
}

exports.deleteBlog = async (req, res) => {
  const {id} = req.params;
  try {
    const deleted_blog = await Blog.findByIdAndRemove(id)
    return res.status(200).json(deleted_blog);
  } catch (error) {
    res.status(403).json(error);
  }
}

