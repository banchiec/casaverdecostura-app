import React, { useState } from 'react'
import "./GalleryCollection.css"; 
import CloseIcon from '@mui/icons-material/Close';
export const GalleryCollection = ({photos}) => {  
  const [model, setModel] = useState(false); 
  const [tempimgSrc, setTempImg] = useState(""); 
  const getImg = (url) => {
   setTempImg(url); 
   setModel(true);
  }
  return ( 
      <>    
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc}></img> 
          <CloseIcon onClick={() => setModel(false)}/>
        </div>
        <div className='gallery'>
          {
            photos?.map((item) => {
               return (
                 <div className='pics' onClick={() =>getImg(item.url)}> 
                <img src={item.url}></img>
                 </div>
               )
            })
          }
        </div>
    </>

  )
}
