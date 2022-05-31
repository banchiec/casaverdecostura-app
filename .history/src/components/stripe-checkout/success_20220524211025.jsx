import React, {useContext, useEffect} from "react"; 
import { CartContext } from "../../context/cart-context";
 
export const Success = () => { 
    const {clearCart} = useContext(CartContext);  

    useEffect(() => { clearCart}, [])
  return (
    <div>
        <h1>Gracias por tu pedido</h1>    
      
   <p>das</p>
        <p>Estamos procesando tu pedido</p> 
        <button>Continue shopping</button>
    </div> 

  )
}
