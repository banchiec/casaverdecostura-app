import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import "./ShowCaseItem.css"    
import { favoriteContext } from "../context/FavoritesContext"

export const ShowCaseItem = (props) => {      
  const product = props; 
  const images = props.photos?.map((photo) => (photo.url))   
  const [clickFavorities,setClickFavorities] = useState(false)          
  const { addtoFavorites} = useContext(favoriteContext);

  return( 
    <div className="cards_item">
      <div 
        className='container_favorities'
      >
        {clickFavorities ?
          <MdFavorite />
          :
          <MdFavoriteBorder onClick={() => addtoFavorites(product)}  />
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
                       



