import React, { useContext } from "react"  
import { cartContext } from "../context/CartContext"       
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'    
import namedColors from 'color-name-list'; 
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded';
import { GetColorName } from 'hex-color-to-color-name';
 export const ItemCart = ({item}) => {      
    const colorName = GetColorName(`${item.color}`);   
    console.log(colorName);
    const { addItemtoCart,  deleteItemfromCart} = useContext(cartContext);    
    console.log(item)                                        
    return (
      <>
            
            
      </>
    )
} 


 