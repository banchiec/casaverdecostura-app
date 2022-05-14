import React, { useContext } from "react"; 
import { cartContext } from "../context/CartContext";
import { StripeCheckout } from "../stripe-checkout/stripe-checkout";
import "./checkout.css" 


export const Checkout = () => { 
 
    const {cartItems} = useContext(cartContext); 
    console.log(cartItems)
  return ( 
    <>
    <div className="checkout">
        <h2>Checkout Summary</h2> 
     <StripeCheckout></StripeCheckout>
    </div> 
    </>
  )
} 
 

export default Checkout; 
 
 


