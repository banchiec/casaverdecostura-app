import React, { useState } from 'react' 
import "./ColorsItem.css" 

export const ColorsItem = (props) => {       
    console.log(props)
  return ( 
      <> 
      {
          props.photos.map((item, i) => {   
              return (
                  <>    
                  <button  style={{ backgroundColor: `${item.color}` }}   data-index={i} key={i} name={item.url} color={item.color} value={item.color} onClick={props.onShow}   className={`color-btn ${props.active == i ? "active" : "null"} `}></button>
                  </>
              )
          })
      }
      </>
  )
}

