import React, { useEffect, useState } from "react";  
import { createContext } from "react";  

export  const favoriteContext = createContext(); 
      

export const FavoritesProvider = ({children} ) => {
  const [favorites, setFavorites] = useState(() => {
    try { 
        
      const favoritesLocalStorage = localStorage.getItem("favoritesProducts"); 
      return favoritesLocalStorage ? JSON.parse(favoritesLocalStorage) : []
        
    }
    catch (error) {
      return [] 
    }
  }) 

  useEffect(() => {
    localStorage.setItem("favoritesProducts", JSON.stringify(favorites))
  },[favorites]) 
      
  const addtoFavorites = (product) => { 
    setFavorites([...favorites, product])
  } 
  return (
    <favoriteContext.Provider value={{favorites, addtoFavorites}}> 
        {children}
    </favoriteContext.Provider>
  )

}
 
