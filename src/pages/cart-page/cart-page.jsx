
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
    {cartItems.length === 0 ?  ( 
        <p className='empty-cart'>Tu carrito está vacio</p>
    ): <div>   
          <div class="cart-container"> 
         {cartItems.map((item, i) => { 
             return (
                <ItemCart key={i} item={item}></ItemCart>
             )
         })} 
         </div>
        </div>} 
     <div className='cart-additional'>
  <h2 className='total'>Total  €{total}</h2>
  <Link to={"/checkout"}><button className='shop-continue'>CONTINUAR</button></Link>
  </div>
   </>
  ) 

  } 