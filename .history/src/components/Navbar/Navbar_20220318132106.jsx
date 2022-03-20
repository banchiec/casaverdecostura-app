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
        <img src='/casaverde_logo.png' alt="Logo" width={300} height={55}/>
      </Link>                            
      <div>  
        <ContainerMenuNavbar>

        </ContainerMenuNavbar>
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
        </>
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