import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BlogCard } from "../Components/BlogCard";
import {GET_BLOGS } from "../Utils/api";

const URL = `http://localhost:8888/api${GET_BLOGS}`

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async (req, res) => {
    try {
      const data = await axios.get(URL);
      console.log(data.data);
      setBlogs(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, [])

  return (
    <div>
      <div id="hero">
        <div className="container-fluid">
          <div className="pt-5">
            <h1 style={{fontSize: "4.5rem", marginTop: "5%", color: "black"}} className="text-center">Blgsy</h1>
          </div>
        </div>
      </div>
      <div id="blogs">
        <div className="container mt-5">
          <div className="top-section">
            <h1>Explore New Blogs</h1>
          </div>
          <div className="all-blogs row mt-3">
            {blogs.map((blog, id) => (
              <div className="col-4">
                 <BlogCard key={id} data={blog}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
