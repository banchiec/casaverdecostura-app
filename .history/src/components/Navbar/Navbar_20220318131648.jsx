import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "./navbarStyled";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import {FaFacebook, FaInstagram, FaUserPlus} from 'react-icons/fa'
import {RiLoginCircleFill} from 'react-icons/ri'
import {BiLogIn} from 'react-icons/bi'
import {FiUserPlus, FiLogIn} from 'react-icons/fi'
const Navbar = (props) => {
  return (
    <NavbarContainer>
      <Link to={PATHS.HOMEPAGE}>
        <img src='/casaverde_logo.png' alt="Logo" width={300} height={55}/>
      </Link>                            
      <div>  
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
        {props.user ? (
        <>
          <Link to={PATHS.HOMEPAGE} onClick={props.handleLogout}>
            Logout
          </Link>

        </>
        ) : (
          <div className=''>
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