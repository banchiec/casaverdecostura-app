import React, { useContext } from "react"  
import { cartContext } from "../context/CartContext"      
import "./ItemCart.css"   
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai' 


 export const ItemCart = ({item}) => {   

    console.log(item)

     const { addItemtoCart,  deleteItemfromCart} = useContext(cartContext);  

    return (
        <>   
        <div>
        <p className="cart-item_name">{item.name}</p>    
         <div className="cart-item">  
             <img className="cart-img" src={item.imageUrl} alt={item.name} ></img> 
             <div className="cart-item-info">  
             <p>{item.size}</p> 
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


 