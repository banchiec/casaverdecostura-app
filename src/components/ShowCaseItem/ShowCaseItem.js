 import React from "react"
import "./ShowCaseItem.css"
export const ShowCaseItem = (props) => {  

 
    const images = props.photos?.map((itemall) => (itemall.url))   
    console.log(images); 
     


     return(
         <>     
            
            <li class="cards_item">
      <div class="card">
        <div class="card_image"><img className="card-img" src={images[0]}></img></div>
        <div class="card_content">
          <h2 class="card_title">{props.name}</h2> 
          <p className="card_price">€ {props.price} </p>
        </div>
      </div>
    </li>
          

         </>
     )
}