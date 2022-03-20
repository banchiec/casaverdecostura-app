import React from "react";
import { Link } from "react-router-dom";
import {FaUserPlus} from 'react-icons/fa'
import { FiLogIn} from 'react-icons/fi'
import { NavbarContainer } from "./navbarStyled";
import { ContainerMenuNavbar } from "./navbarStyled";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <Link to={PATHS.HOMEPAGE}>
        <img src='/casaverde_logo.png' alt="Logo" />
      </Link>                            
      <div>  
        <div className='navbar_menu'>
          <Link to={PATHS.PROTECTEDPAGE}>
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
        </div>
        {props.user ? (
        <>
          <Link to={PATHS.HOMEPAGE} className='authLink' onClick={props.handleLogout}>
              <FiLogIn/>
          </Link>
        </>
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
      </div>  
    </NavbarContainer>
  );
};

export default Navbar;