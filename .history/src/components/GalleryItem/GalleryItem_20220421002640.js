import React, { useState } from 'react';
import "./GalleryItem.css";
export const GalleryItem = (props) => {  
    console.log(props)
    const images = props.photos?.map(item => item.url); 
    const [selectedImg, setselectedImg] = useState(images[0]); 
    console.log(selectedImg) 
  return ( 
      <>  
      <div className='container-gallery'>
        <img src={selectedImg} alt="Selected" className="selected"/>
            <div className="imgContainer"> 
            {props.photos?.map((img, index) => {
                return (
                    <> 
                    <img key={index}  onClick={(() => setselectedImg(img.url))} src={img.url} alt="producto"></img>
                    </> 
                )
           })}
        </div>  
      </div>
      </>
  )
}
