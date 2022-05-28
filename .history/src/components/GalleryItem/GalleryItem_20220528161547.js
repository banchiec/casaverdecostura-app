import React, { useState } from 'react';
import "./GalleryItem.css";
export const GalleryItem = (props) => {   
    const showImage = (url) => {
        props.setImageShow(url);
    }  
  return ( 
    <>  
      <div className='container-gallery'>
        <div>
          <img src={props.activeImage} alt="Selected" className="selected"></img>
        </div>
        <div className="imgContainer"> 
          {props.photos?.map((img, index) => {
              return (
                  <> 
                  <img key={index}  onClick={(() => showImage(img.url))} src={img.url} alt="producto"></img>
                  </> 
              )
          })}
        </div>  
      </div>
    </>
  )
}
