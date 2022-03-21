import React, { useEffect, useState } from "react";
import '../../App.css'
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
  const [hiddenNavbar, setHiddenNavbar] = useState('')
  console.log(props.user);
  const hidden = 'hidden'

  useEffect(()=>{
    console.log(hiddenNavbar);
  },[])
  return (
    <NavbarContainer className={`${hiddenNavbar}`} hidden={true}>
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
            <Link to={PATHS.ADMIN} onClick={() => setHiddenNavbar(hidden)}>
              Admin
            </Link>
          )}
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