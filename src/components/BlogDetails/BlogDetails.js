import React, { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BlogService from "../../services/blog.service"; 
import "./BlogDetails.css"; 
export const BlogDetails = () => {
  const blogService = new BlogService();
  const [blog, setBlog] = useState([]);   
 console.log(blog)

  const { id } = useParams();
  const getBlog = () => {
    blogService
      .getBlog(id)
      .then((data) => {
        setBlog(data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBlog(id);
  }, []);  

  let data = new Date(blog?.createdAt); 
  var month = data.getUTCMonth() + 1; 
  let day = data.getUTCDate();
  var year = data.getUTCFullYear(); 

 let newdata =  day + "/" + month + "/" + year; 
 console.log(newdata)

  console.log(blog?.images?.[0])

  return ( 
    <>
    <div className="details-blog-container">
            <div className="details-blog-content">      
              <div className="details-blog-content-image"> 
              <img src={blog?.images?.[0]}></img>
              </div> 
              <div className="details-blog-content-info-container">
              <div className="details-blog-content-info">
                <p>Creado: {newdata}  </p> 
                <p>Autor: Aleksei  </p>
              </div> 
              <div className="details-blog-textarea"> 
            <h3>{blog?.title}</h3>
              <p>{blog?.firstsection}</p>
            </div>
            </div>
            </div>
    </div>
  </>
  );
};
