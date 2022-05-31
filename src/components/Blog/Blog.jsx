import React, { useState } from 'react'  
import "./Blog.css" 
import { Link } from 'react-router-dom'

export const Blog = ({blogs}) => {       


  console.log(blogs)
  
 
  return ( 
      <div className='blogs-container'> 
      <div className='blog-content-container'>            
      {blogs?.map((item, i) => {   
         console.log(item)
        return (
          <>                            
          <div className='blog-content-content'>
          {item.images?.map((item) => { 
            return (
              <>
                <div className='blog-content-image'> <img src={item}></img> </div>   
              </>
            )
          })}
       <div className='blog-content-text'> 
       <h4>{item.title}</h4> 
         <p maxlength="50">{item.firstsection.substring(0, 60)}....</p>  
        <Link to={`/post/${item?._id}`}><p>Seguir leyendo</p></Link>
         </div>
       </div>
          </>
        )
      })}                                               
      </div>
      </div>                                                           
)
}                                          



