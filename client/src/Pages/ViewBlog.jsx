import React, { useState, useEffect } from "react";
import { SINGLE_BLOG, SINGLE_USER } from "../Utils/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Comment } from "../Components/Comment";

const BLOG_URL = `http://localhost:8888/api${SINGLE_BLOG}`;
const USER_URL = `http://localhost:8888/api${SINGLE_USER}`;
export const ViewBlog = () => {
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});

  const id = useParams();
  const getSingleBlog = async () => {
    try {
      const res = await axios.get(`${BLOG_URL}/${id.id}`);
      const user_res = await axios.get(`${USER_URL}/${res.data.userId}`);
      setUser(user_res.data.data);
      setBlog(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getSingleBlog();
  }, []);

  const formatDate = (date) => {
    const createdAtDate = new Date(date);
    const day = createdAtDate.getDate();
    const month = createdAtDate.toLocaleString("default", { month: "long" });
    const year = createdAtDate.getFullYear();
    return `${day} ${month} ${year}`;
  };



  return (
    <div>
      <div className="content-fluid">
      <img src={blog.photo === "null"? "" : blog.photo} alt="" />
      </div>
      <div className="container" style={{ marginTop: "5%" }}>
        <h1 className="title">{blog.title}</h1>
        <div className="d-flex gap-2">
          <p>{user.name}</p>
          <p>{formatDate(blog.createdAt)}</p>
        </div>
        <div className="blog-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            tempora cupiditate exercitationem iure, provident alias, assumenda
            quidem est omnis dolor blanditiis sit cum eligendi adipisci ut
            voluptas voluptate, voluptatum totam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Reiciendis eum cupiditate, assumenda
            nisi dolorum inventore distinctio, quae facilis autem dicta
            reprehenderit fugiat quisquam voluptatem nostrum. Perferendis vel
            hic dolorem amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Praesentium, quisquam minus voluptatum,
            perspiciatis soluta facilis sapiente molestias ullam, exercitationem
            provident qui eligendi suscipit asperiores corporis culpa excepturi
            necessitatibus repellendus. Temporibus.

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            tempora cupiditate exercitationem iure, provident alias, assumenda
            quidem est omnis dolor blanditiis sit cum eligendi adipisci ut
            voluptas voluptate, voluptatum totam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Reiciendis eum cupiditate, assumenda
            nisi dolorum inventore distinctio, quae facilis autem dicta
            reprehenderit fugiat quisquam voluptatem nostrum. Perferendis vel
            hic dolorem amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Praesentium, quisquam minus voluptatum,
            perspiciatis soluta facilis sapiente molestias ullam, exercitationem
            provident qui eligendi suscipit asperiores corporis culpa excepturi
            necessitatibus repellendus. Temporibus.
          </p>
        </div>
        <hr />
        <div className="d-flex gap-3">
          <h5>Comments: {blog.comments.length}</h5>
          <h5>Likes: {blog.likes.length}</h5>
          <hr />
        </div>
        {blog.comments.map((comment) => (
            <Comment comment={comment} />
          ))}
      </div>
    </div>
  );
};
