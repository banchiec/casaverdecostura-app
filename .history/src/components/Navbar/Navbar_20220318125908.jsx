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
                {/* <Link to={PATHS.PROTECTEDPAGE}>
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
        </Link> */}
        {/* <Link to={PATHS.PROTECTEDPAGE}>
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
        </Link> */}
        {props.user ? (
        <>
          {/* <Link to={PATHS.PROTECTEDPAGE} className="authLink">
            <FaFacebook/>
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} className="authLink">
            <FaInstagram/>
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} className="authLink">
            <FaFacebook/>
          </Link> */}

          {/* <Link to={PATHS.ADMINPAGE} className="authLink">
            Admin
          </Link> */}

          {/* <button className="nav-logoutbtn" onClick={props.handleLogout}>
            Logout
          </button> */}
          <Link to={PATHS.HOMEPAGE} onClick={props.handleLogout}>
            Logout
          </Link>

        </>
        ) : (
          <div>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              <FiLogIn/>
            </Link>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              <FaUserPlus/>
            </Link>
            {/* <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link> */}
          </div>
        )}
      </div>  
    </NavbarContainer>
    // <nav className='navbar-casaverde'>
    //   <Link to={PATHS.HOMEPAGE} className="nav__projectName">
    //     {CONSTS.CAPITALIZED_APP} 
    //   </Link>

    //   <div className="nav__authLinks">
    //     {props.user ? (
    //       <>
    //         <Link to={PATHS.PROTECTEDPAGE} className="authLink">
    //           Protected Page
    //         </Link>
    //         <button className="nav-logoutbtn" onClick={props.handleLogout}>
    //           Logout
    //         </button>
    //       </>
    //     ) : (
    //       <>
    //         <Link to={PATHS.SIGNUPPAGE} className="authLink">
    //           Signup
    //         </Link>
    //         <Link to={PATHS.LOGINPAGE} className="authLink">
    //           Log In
    //         </Link>
    //       </>
    //     )}
    //   </div>
    // </nav>
  );
};

export default Navbar;