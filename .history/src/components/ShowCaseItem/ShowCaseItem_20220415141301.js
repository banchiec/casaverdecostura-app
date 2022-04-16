import React, { useEffect, useState } from "react"
import "./ShowCaseItem.css"  
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import { Link } from "react-router-dom"

export const ShowCaseItem = (props) => {    
  const images = props.photos?.map((photo) => (photo.url))   
  const [clickFavorities,setClickFavorities] = useState(false)

  const saveFavority = (e) => {
    console.log("object");
  }
  useEffect(() => {
    clickFavorities ? addFavority() : removeFavority()
  },[clickFavorities])
  
  const addFavority= () => {
    props?.user?.favorities.push(props?._id)
    console.log("true");
  }

  const removeFavority= () => {
    props?.user?.favorities.pop(props?._id)
    // console.log("false");
  }
  const handleFavority = () => {
    setClickFavorities(!clickFavorities)
  }
  return( 
    <div className="cards_item">
      <div 
        className='container_favorities'
        onClick={()=> handleFavority()}
      >
        {clickFavorities ?
          <MdFavorite/>
          :
          <MdFavoriteBorder />
        }
      </div>
      <div className="card">
        <div className="card_image">
          <Link  to={`/details/${props._id}`}>
            <img  className="card-img" alt='product' src={images[0]}/>
          </Link>
        </div>
        <div className="card_content">
          <h4 className="card_title">{props.name}</h4> 
          <p className="card_price">{props.price} .00 EUR </p>
        </div>
      </div>
    </div>
  )
}
