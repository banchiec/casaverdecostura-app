import React, { useContext } from "react"  
import { cartContext } from "../context/CartContext"      
import "./ItemCart.css"   
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'    
import namedColors from 'color-name-list'; 
import { GetColorName } from 'hex-color-to-color-name';





 export const ItemCart = ({item}) => {      
      console.log(item.color)

    const colorName = GetColorName(`${item.color}`);   
    console.log(colorName);

    const { addItemtoCart,  deleteItemfromCart} = useContext(cartContext);    
    console.log(item)                                        
    return (
        <>   
        <div>
        <p className="cart-item_name">{item.name}</p>    
         <div className="cart-item">  
             <img className="cart-img" src={item.imageUrl} alt={item.name} ></img> 
             <div className="cart-item-info">   
             <p>{colorName}</p>
             <p>{item.sizes}</p> 
                         <div className="cart-functional-buttons">                         
                         <span><AiOutlinePlus onClick={() => addItemtoCart(item)}></AiOutlinePlus></span> 
                         {item.amount}
                        <span><AiOutlineMinus onClick={() => deleteItemfromCart(item)}></AiOutlineMinus></span>
                         </div>
                 </div>
                 </div>
                 </div>
        </>
    )
} 


 