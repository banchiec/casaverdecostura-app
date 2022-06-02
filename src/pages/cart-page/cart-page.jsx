
import React, { useContext, useEffect, useState } from 'react' 
import { ItemCart } from '../../components/ItemCart/ItemCart';
import { cartContext } from '../../components/context/CartContext';   
import { Link } from 'react-router-dom'; 
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded'; 
import { GetColorName } from 'hex-color-to-color-name';
import "./cart-page.css"




export const Cart = () => { 
    const [productLength, setProductLength] = useState(0);  
    const {cartItems} = useContext(cartContext);  
    console.log(cartItems)
    const { addItemtoCart,  deleteItemfromCart} = useContext(cartContext);     

    useEffect(() => {
    setProductLength(
        cartItems.reduce((previous, current) => previous.amount + current.amount, 0)
    )
    }, [cartItems])   
    const total  = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0 ); 
    console.log(total)

    return (
        <>
              
                <div className='cart-container'>  
   <div className='cart-content-container'> 
   <h2>Carrito</h2> 
   <hr/>
   <div className='cart-info'>  
   {cartItems.map((item, i ) => {  
       console.log(item)
      const colorName = GetColorName(`${item.color}`); 
       return (
           <>
       <div className='cart-info-content'>
       <div className='cart-info-image'><img src={item?.imageUrl}></img></div>  
           <div className='cart-info-general'>
               <p className='cart-info-general-name'>{item.name}</p>
               <p className='cart-info-general-price'>{item.price} €</p>        
               <p className='cart-info-general-color' >Color: {colorName} </p> 
               <p className='cart-info-general-size'>Talla: {item.sizes}</p>
               </div>  
           <div className='cart-content-buttons'> 
           <div className='cart-content-buttons-quantity'>
           <input type="text"  value={item.amount}></input>  
           <div className='arrows'> 
            <div className='arrows-container'>
               <KeyboardArrowUpRoundedIcon onClick={() => addItemtoCart(item)} className='up'></KeyboardArrowUpRoundedIcon> 
               <KeyboardArrowDownRoundedIcon className='down' onClick={() => deleteItemfromCart(item)} ></KeyboardArrowDownRoundedIcon>
               </div>
               </div>
           </div>  
              <div className='cart-content-buttons-extras'>
           <div key={i} className='cart-content-total'> 
            {item?.amount * item?.price} €
           </div> 
           <div className='cart-content-delete'>
           <DeleteRoundedIcon/>
           </div>
           </div>
           </div>  
       </div> 
           </>
       )
   })}
   </div>
   </div>    
   <div className='cart-info-additionals'>  
  
            
                <>
              <div className='cart-info-additionals-elements'>
         <div className='cart-info-additionals-quantity'> {cartItems.length }  artículos</div> 
         <div className='cart-details-total'> {total} €</div>
         </div>  
                </>    
         <div className='cart-info-pay-button'>
         <Link to={"/checkout"}><button>PAGAR</button></Link>
     </div>     
     <hr/>
     <div className='cart-info-links'> 
    <p><HttpsRoundedIcon/> Política de Privacidad</p> 
    <p><LocalShippingRoundedIcon/> Condiciones Generales</p>  
    <p><CreditScoreRoundedIcon/> Política de devolución</p>

     </div>                                  
     </div>
    </div>  
    </>
   )
  }  
