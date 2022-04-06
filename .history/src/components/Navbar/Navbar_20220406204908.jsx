import React from "react";
import { Link } from "react-router-dom";
import {FaUserPlus} from 'react-icons/fa'
import { FiLogIn, FiSearch } from 'react-icons/fi'
import { NavbarContainer } from "./navbarStyled";
import { BsCartFill } from 'react-icons/bs'
import "./Navbar.css";
import * as PATHS from "../../utils/paths";

const Navbar = (props) => {
  return (
    <NavbarContainer hidden >
      <div>  
        <div className='container-search'>
          <FiSearch/>
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
            <Link to={PATHS.PROTECTEDPAGE}>
              NOVEDADES
            </Link> 
            <Link to={PATHS.PROTECTEDPAGE}>
              INSPIRACIÓN
            </Link>
            <Link to={PATHS.PROTECTEDPAGE}>
              COLECCIONES
            </Link>
            {props?.user?.role === 'admin' && (
              <Link to={PATHS.ADMIN}>
                Admin
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
          <Link to={PATHS.HOMEPAGE} className='authLink' onClick={props.handleLogout}>
                <BsCartFill/>
          </Link>
        </div>
      </div>  
    </NavbarContainer>
  );
};

export default Navbar;