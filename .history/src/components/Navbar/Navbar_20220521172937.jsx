import React, { useContext, useEffect } from "react";
import {  Link} from "react-router-dom";
import {FaUserPlus} from 'react-icons/fa'     
import { FiLogIn, FiSearch } from 'react-icons/fi'   
import { NavbarContainer } from "./navbarStyled";   
import { BsCartFill } from 'react-icons/bs' 
import {MdFavorite} from 'react-icons/md' 
import "./Navbar.css";
import * as PATHS from "../../utils/paths"; 
import { cartContext } from "../context/CartContext"; 
import {favoriteContext} from "../context/FavoritesContext";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"; 

const Navbar = (props) => {    
  const {cartItems} = useContext(cartContext);   
  console.log(cartItems)  
  const {favorites} = useContext(favoriteContext);  
  const total  = cartItems.reduce((previous, current) => previous + current.amount , 0 );   
  console.log(total)  
  return (
    <NavbarContainer hidden >
      <div>   
        <div className='container-search'>
          <p className="search">BUSCAR</p>
          <input type='text'/>
        </div>
        <div className='navbar-center'> 
          <Link to={PATHS.HOMEPAGE}>
            <img src='/casaverde_logo.png' alt="Logo" />
          </Link>                      
          <div className='navbar_menu'>
            <Link to={PATHS.SHOPPING}>
              TIENDA
            </Link> 
            <Link to={"#"}>
              NOVEDADES
            </Link> 
            <Link to={"#"}>
              COSTURA
            </Link>
            <Link to={PATHS.COLLECTIONS}>
              COLECCIONES
            </Link>
            {props?.user?.role === 'admin' && (
              <Link to={PATHS.ADMIN}>
                ADMIN
              </Link>
            )}
          </div>
        </div>
        <div className='navbar_icons'>
          {props.user ? (
            <Link to={PATHS.HOMEPAGE} className='authLink' onClick={props.handleLogout}>
                <FiLogIn/>
            </Link>
          ) : (
            <>
              <Link to={PATHS.LOGINPAGE} className="authLink">
                <FiLogIn/>
              </Link>
              <Link to={PATHS.SIGNUPPAGE} className="authLink">
                <FaUserPlus/>
              </Link>
            </>
          )} 
          <Link to={PATHS.HOMEPAGE} className='authLink' onClick={props.handleLogout} />  
          <div className='navbar_icons_favorites' >
            <Link to={"/favorites"}>
              <MdFavorite />
              <span>{favorites.length} </span>
            </Link>
          </div>
          <div>
            <Link to={"/cart"}>
              <BsCartFill /> 
              <span className="cart-count">{total}</span>
            </Link>
          </div>
        </div>
      </div>  
      <div className="navbar_icons_mobile">
        <div>
          <Link to={'/favorites'}>
            <MdFavorite/>
          </Link>
          <p>{favorites.length}</p>
        </div>
        <div>
          <Link to={'/cart'}>
            <BsCartFill/>
          </Link>
          <p>{total}</p>
        </div>
      </div>
      {/* <BurgerMenu></BurgerMenu> */}
    </NavbarContainer>
  );
};

export default Navbar;