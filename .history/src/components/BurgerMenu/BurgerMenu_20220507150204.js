import React, { useState } from 'react' 
import "./BurgerMenu.css"; 


export const BurgerMenu = () => { 
 
    const [menuBurger, setmenuBurger] = useState(true);  
    const [show, setShow] = useState(""); 
    console.log(menuBurger)
 
    const handleBurgerMenu = () => {
        setmenuBurger(!menuBurger); 
        menuBurger ? setShow("showburger") : setShow("")
    }


  return ( 
      <> 
      <div onClick={handleBurgerMenu} >
    <div className='line-1'></div> 
    <div className='line-2'></div> 
    <div className='line-3'></div>   
    <div className='content'>
    <div className={show}>  
    <p>csaca</p>
    </div>
    </div>
    </div>       
    </>
  )
}
