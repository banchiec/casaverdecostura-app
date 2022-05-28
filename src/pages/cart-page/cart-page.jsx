
import React, { useContext, useEffect, useState } from 'react' 
import { ItemCart } from '../../components/ItemCart/ItemCart';
import { cartContext } from '../../components/context/CartContext';   
import { Link } from 'react-router-dom';
import "./cart-page.css"




export const Cart = () => { 
    const [productLength, setProductLength] = useState(0);  

    const {cartItems} = useContext(cartContext); 
     

    useEffect(() => {
    setProductLength(
        cartItems.reduce((previous, current) => previous + current.amount, 0)
    )
    }, [cartItems])   
    const total  = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0 );

  return (
   <>  
   
   </>
  )  
  
  } 