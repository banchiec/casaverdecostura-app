import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import "./ShowCaseItem.css"  

export const ShowCaseItem = (props) => {    
  const images = props.photos?.map((photo) => (photo.url))   
  const [clickFavorities,setClickFavorities] = useState(false)
  const [favorities, setFavorities]  = useState([])

  const saveFavority = (e) => {
    console.log("object");
  }
  useEffect(() => {
    // clickFavorities ? addFavority() : removeFavority()
  },[clickFavorities])
  
  // console.log(props?.user?.favorities);
  const addFavority = () => {
    const newFavorities = props?.user?.favorities
    newFavorities.push(props?._id)
    setFavorities(newFavorities)
    // .push(props?._id)
    // const updateUser= {
    //   ...props.user,
    //   favorities: props?.user?.favorities 
    // }
    // enviar a la base de datos y actualizar 
  }
  const removeFavority = () => {
    const newFavorities = props?.user?.favorities.filter((item) => {
      return item && item != props._id
      //  return item =! props?._id
    })
    setFavorities(newFavorities)
  }
  console.log(favorities);
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
          <MdFavorite onClick={removeFavority} />
          :
          <MdFavoriteBorder onClick={addFavority} />
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
