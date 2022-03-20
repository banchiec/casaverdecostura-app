import React from "react";
import { Link } from "react-router-dom";
import {FaUserPlus} from 'react-icons/fa'
import { FiLogIn} from 'react-icons/fi'
import { NavbarContainer } from "./navbarStyled";
import { BsCartFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { ContainerMenuNavbar } from "./navbarStyled";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  console.log(props.user);
  return (
    <NavbarContainer>
      <Link to={PATHS.HOMEPAGE}>
        <img src='/casaverde_logo.png' alt="Logo" />
      </Link>                            
      <div>  
        <div className='navbar_menu'>
          <Link to={PATHS.SHOPPING}>
            Tienda
          </Link> 
          <Link to={PATHS.PROTECTEDPAGE}>
            Novedades
          </Link> 
          <Link to={PATHS.PROTECTEDPAGE}>
            Inspiración
          </Link>
          <Link to={PATHS.PROTECTEDPAGE}>
            Colecciones
          </Link>
          {props?.user?.role === 'admin' && (
            <Link to={PATHS.ADMIN}>
              Admin
            </Link>
          )}
          <Link to={PATHS.HOMEPAGE} className='authLink' onClick={props.handleLogout}>
              <BsCartFill/>
          </Link>
        </div>
        {props.user ? (
        <div className='navbar_icons'>
          <Link to={PATHS.HOMEPAGE} className='authLink' onClick={props.handleLogout}>
              <FiLogIn/>
          </Link>
        </div>
        ) : (
          <div className='navbar_icons'>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              <FiLogIn/>
            </Link>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              <FaUserPlus/>
            </Link>
          </div>
        )}
      </div>  
    </NavbarContainer>
  );
};

export default Navbar;