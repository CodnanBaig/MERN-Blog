import axios from "axios";
import React, { useContext, useState } from "react";
import { ADD_BLOG } from "../Utils/api";
import { TokenContext } from "../Context/TokenContextProvider";

const URL = `http://localhost:8888/api${ADD_BLOG}`;

export const PostBlog = () => {
  const { token } = useContext(TokenContext);
  const [blog, setBlog] = useState({});

  const postBlog = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const photo = e.target.photo.value;
    const blog = e.target.blog.value;
    const category = e.target.category.value;
    const new_blog = {
      title: title,
      description: description,
      photo: photo,
      blog: blog,
      category: category,
    };

    try {
      const blogHeaders = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.post(URL, new_blog, {headers: blogHeaders});
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" style={{ marginTop: "8%" }}>
      <h2>Post A Blog</h2>
      <form className="row g-3" onSubmit={postBlog}>
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="title" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Description</label>
          <input type="textarea" className="form-control" name="description" />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            Image Url
          </label>
          <input type="text" className="form-control" name="photo" />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            Category
          </label>
          <input type="text" className="form-control" name="category" />
        </div>
        <div className="col-md-12">
          <label htmlFor="" className="form-label">
            Blog
          </label>
          <textarea type="text" className="form-control" rows={5} name="blog" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
