const express = require("express");
const { postBlog, getBlogs, getBlogById, deleteBlog, updateBlog } = require("../controllers/blogControllers");
const verifyToken = require("../midllewares/verifyJWT");

const blogRouter = express.Router();

blogRouter.post("/blogs/add-blog", verifyToken, postBlog);

blogRouter.get("/blogs", getBlogs);

blogRouter.get("/blogs/:id", getBlogById);

blogRouter.delete("/blogs/:id", verifyToken, deleteBlog);

blogRouter.put("/blogs/:id", verifyToken, updateBlog);

module.exports = blogRouter;