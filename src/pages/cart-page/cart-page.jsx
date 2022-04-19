import React ,{ useContext} from "react"; 
import { CartContext } from "../../context/cart-context";
import CartItem from "./cart-items";   
import "./cart-page.css"
import Total from "./total";

const CartPage = () => {
    const {cartItems, itemCount, total, increase, decrease} = useContext(CartContext);  
    const funcs = {increase, decrease} 
    console.log(cartItems)
    return ( 
        <> 
        <h1>Cart</h1> 
         {
             cartItems.length === 0 ? <div className="empty-cart">Tu carrito está vacio </div>
          : <div className="cart-page">
              <div className="cart-item-container" >
                {
                  cartItems.map(item => <CartItem  {...item} key={item.name} {...funcs}/>)
                }
              </div>
          </div>  
         }
            <Total itemCount={itemCount} total={total}></Total>
        </>
    )
} 


export default CartPage; 
