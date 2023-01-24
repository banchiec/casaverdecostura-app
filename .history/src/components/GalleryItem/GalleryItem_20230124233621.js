<<<<<<< HEAD
import React, { useState } from "react";
import "./GalleryItem.css";
export const GalleryItem = (props) => {
  const showImage = (url) => {
    props.setImageShow(url);
  };
  return (
    <>
      <div className="container-gallery">
        <img
          src={`http://localhost:5005/${props.activeImage}`}
          alt="Selected"
          className="selected"
        ></img>
        <div className="imgContainer">
          {props.photos?.map((img, index) => {
            return (
              <>
                <img
                  key={index}
                  onClick={() => showImage(img?.url)}
                  src={`http://localhost:5005/${img.url}`}
                  alt="producto"
                ></img>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
=======
import React, { useState } from 'react'
import './GalleryItem.css'
export const GalleryItem = (props) => {
	const images = props.photos?.map((item) => item.url)
	const [selectedImg, setselectedImg] = useState(images[0])
	return (
		<>
			<div className="container-gallery">
				<img src={selectedImg} alt="Selected" className="selected"></img>
				<div className="imgContainer">
					{props.photos?.map((img, index) => {
						return (
							<>
								<img
									key={index}
									onClick={() => setselectedImg(img.url)}
									src={img.url}
									alt="producto"
								></img>
							</>
						)
					})}
				</div>
			</div>
		</>
	)
}
>>>>>>> preprodClean
