import React  from "react"; 
import { useContext } from "react";   
import { favoriteContext } from "../../components/context/FavoritesContext"; 
import "./favorites-page.css" 
import { Link } from "react-router-dom";



export const Favorites = () => { 
  const {favorites} = useContext(favoriteContext);     
  return ( 
    <>
     <div className="container-favorites">           
     <div className="container-element"></div> 
      {
          favorites.map(item => { 
              return ( 
                  <>         
                  <div className="element">
                <img src={item.photos[0].url}></img>
                <p>{item.name}</p> 
                <p>{item.price} EUR</p> 
               <Link to={`/details/${item._id}`}><button>Ir al producto</button></Link>
                </div>    
                </>
              )
          })
      }
     </div>    
     </>
  )
}
