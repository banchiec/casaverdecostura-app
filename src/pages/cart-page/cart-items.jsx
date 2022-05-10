import React from "react"; 
import { PlusCircleIcon, MinusCircleIcon, TrashIcon} from "../../components/icons"; 
 
const CartItem = (props) => { 

    console.log(props)

    const {name, price, quantity, photos, id, increase, decrease, imageUrl} = props; 
    const product = {name, price, quantity, id};
    console.log(photos)
    return (
      <div className="cart-item">
          <div className="item-image">
              <img src={imageUrl} alt="productImage"></img>
          </div> 
          <div className="name-price">
            <h4>{name}</h4> 
            <p>{price} $</p>
          </div> 
          <div className="quantity">
         <p>{`Quantity: ${quantity}`}</p>
          </div> 
          <div className="btns-container">
           <button className="btn-increase" onClick={() => increase(product)}>
               <PlusCircleIcon width="20px"/>
           </button> 
           {
               quantity === 1 &&  
               <button className="btn-trash">
                   <TrashIcon width="20px"/>
               </button>
           } 

           {
               quantity > 1 && 
               <button className="btn-decrease" onClick={() => decrease(product)}>
                   <MinusCircleIcon width="20px"/>
               </button>
           }
          </div>
      </div>
    )
}  

 export default CartItem;