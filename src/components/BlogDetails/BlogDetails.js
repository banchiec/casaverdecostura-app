import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogService from "../../services/blog.service";
export const BlogDetails = () => {
  const blogService = new BlogService();
  const [blog, setBlog] = useState(null);
  console.log(blog);
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

  return (
    <div className="details-blog-container">
          <> 
            <div className="details-blog-content">    
              <div className="details-blog-content-image"></div>
              <div className="details-blog-content-info"></div>
            </div>
            <div className="details-blog-textarea">
            </div>
          </>
    </div>
  );
};
