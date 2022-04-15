import React from "react"
import "./ShowCaseItem.css"  
import {MdFavorite} from 'react-icons/md'

export const ShowCaseItem = (props) => {    
  const images = props.photos?.map((itemall) => (itemall.url))   
     return( 
         <>                         
          <div className="cards_item">
            <div className="card">
              <div className="card_image">
                <img className="card-img" alt='product' src={images[0]}/>
              </div>
            <MdFavorite/>
              <div className="card_content">
                <h4 className="card_title">{props.name}</h4> 
                <p className="card_price">{props.price} .00 EUR </p>
              </div>
            </div>
          </div>
         </>
     )
}