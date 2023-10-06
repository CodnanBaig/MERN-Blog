const express = require("express");
const { postBlog, getBlogs } = require("../controllers/blogControllers");
const verifyToken = require("../midllewares/verifyJWT");

const blogRouter = express.Router();

blogRouter.post("/blogs/add-blog", verifyToken, postBlog);

blogRouter.get("/blogs", getBlogs);

module.exports = blogRouter;