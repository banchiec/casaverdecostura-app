import React, {useContext, useState} from "react"; 
import { useStripe } from "@stripe/react-stripe-js"; 
import { cartContext } from "../context/CartContext"; 
import fetchFromAPI from "../../helpers";  
export const StripeCheckout = () => { 
    const [email, setEmail] = useState("");   
    const {cartItems} = useContext(cartContext); 
    const stripe = useStripe();
    const handleStripeSubmit = async (e) => {   
        console.log(e)
        e.preventDefault(); 


    const successshop = cartItems.map((item) => {
        return {
             color: item.color, 
             name: item.name ,
             description: item.description, 
             price: item.price
        }
    } )

     const line_items  =  cartItems.map((item) => {  
         console.log(item.color)                                                                             
         return {    
             quantity: item.amount,  
             price_data: {
                 currency: "eur", 
                 unit_amount: item.price * 100, 
                 product_data: {
                     name: item.name, 
                     description: item?.description,   
                     images: [item.imageUrl]
                 }

             }
         } 
     })  
     const response = await fetchFromAPI('', {
         body: {line_items, customer_email: email, successshop},
     })       
      
     console.log(response.body);
     
     const  {sessionId} =  await response;   
    await stripe.redirectToCheckout({
      sessionId
   })
    } 

  return (
    <form onSubmit={handleStripeSubmit} novalidate>
        <div>
            <input type="email" value={email} className="nomad-input" placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
        </div> 
        <div>
            <button type="submit" className="button">
                Checkout
            </button>
        </div>
    </form>
  )
}
