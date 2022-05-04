import React, { useContext } from "react"; 
import { CartContext } from "../../context/cart-context";  
import { StripeCheckout } from "../stripe-checkout/stripe-checkout";
import "./checkout.css" 


export const Checkout = () => { 
 
    const {itemCount, total} = useContext(CartContext);
  return ( 
    <>
    <div className="checkout">
        <h2>Checkout Summary</h2> 
        <h3>{`Total: ${itemCount}`}</h3> 
        <h3>{`Total para pagar: ${total}`}</h3>
    </div> 
    <StripeCheckout></StripeCheckout>
    </>
  )
} 
 

export default Checkout; 
 
 


