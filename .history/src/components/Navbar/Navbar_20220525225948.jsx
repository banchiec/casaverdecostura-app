import React, { useContext, useEffect } from "react";
import {  Link} from "react-router-dom";
import {FaUserPlus} from 'react-icons/fa'     
import { FiLogIn, FiSearch} from 'react-icons/fi'    
import { BsBag } from 'react-icons/bs';
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
    <NavbarContainer >
      <div>   
        <div className='container-search'>
        <Link to={"/search"}><p className="search">BUSCAR</p></Link>
          <input type='text'/>
        </div>
        <div className='navbar-center'> 
          <Link to={PATHS.HOMEPAGE}>
            <img src='/casaverde_logo.png' alt="Logo" />
          </Link>                      
          <div className='navbar_menu'>
          <Link to={"/"}>
              INICIO
            </Link>
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
              <p>{favorites.length} </p>
            </Link>
          </div>
          <div className='navbar_icons_favorites'>
            <Link to={"/cart"}>
              <BsBag className="bag-icon"/>
              <p className="cart-count">{total}</p>
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
            <BsBag className="bag-icon"/>
          </Link>
          <p>{total}</p>
        </div>
      </div>
      {/* <BurgerMenu></BurgerMenu> */}
    </NavbarContainer>
  );
};

export default Navbar;