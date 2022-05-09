import React, {useContext, useState} from "react"; 
import { useStripe } from "@stripe/react-stripe-js"; 
import { CartContext } from "../../context/cart-context"; 
import fetchFromAPI from "../../helpers"; 

export const StripeCheckout = () => { 
    const [email, setEmail] = useState("");   
    const {cartItems} = useContext(CartContext); 
    const stripe = useStripe();
    console.log(stripe)
    const handleStripeSubmit = async (e) => {   
        console.log(e)
        e.preventDefault();
     const line_items  =  cartItems.map((item) => { 
         console.log(item)
         return {
             quantity: item.quantity,  
             price_data: {
                 currency: "eur", 
                 unit_amount: item.price * 100, 
                 product_data: {
                     name: item.name, 
                     description: item?.description, 
                 }

             }
         } 
     }) 
     const response = await fetchFromAPI('', {
         body: {line_items, customer_email: email},
     })
     const  {sessionId} =  await response;   
     console.log(response)
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
