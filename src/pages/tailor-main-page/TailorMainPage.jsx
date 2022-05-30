import React, { useEffect, useState } from 'react'
import BlogService from '../../services/blog.service' 
import { Blog } from '../../components/Blog/Blog'; 

export const TailorMainPage = () => { 
  const blogService = new BlogService();  
  const [blog, setBlog] = useState(null);    
  
 
  
  const getTailorMainData =  () => {
    blogService
    .getBlogs()
    .then((data) => {   
     setBlog(data?.data)
    })
  } 
  useEffect(() => {
    getTailorMainData()
  }, [])
  return (
   <> 
   <Blog  blogs={blog?.filter((blog) => blog?.categories == "Confección a Medida" )} ></Blog>
   </>
  )
}
