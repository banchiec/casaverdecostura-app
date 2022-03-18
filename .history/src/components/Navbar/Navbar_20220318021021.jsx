import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav className="nav-main">
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        <img src='/casaverde_logo.png' alt="Logo" width={300} height={55}/>
      </Link>                            
      <div className="nav__authLinks">  
        <Link to={PATHS.PROTECTEDPAGE} className="authLink">
          Tienda
        </Link> 
        <Link to={PATHS.PROTECTEDPAGE} className="authLink">
          Novedades
        </Link> 
        <Link to={PATHS.PROTECTEDPAGE} className="authLink">
          Inspiración
        </Link>
        <Link to={PATHS.PROTECTEDPAGE} className="authLink">
          Colecciones
        </Link>
        <Link to={PATHS.PROTECTEDPAGE} className="authLink">
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
        </Link>
        <Link to={PATHS.PROTECTEDPAGE} className="authLink">
          <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
        </Link>
        {props.user ? (
        <>
          <Link to={PATHS.PROTECTEDPAGE} className="authLink">
            <FaFacebook/>
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} className="authLink">
            <FaInstagram/>
          </Link>
          <Link to={PATHS.PROTECTEDPAGE} className="authLink">
            <FaFacebook/>
          </Link>

          <Link to={PATHS.ADMINPAGE} className="authLink">
            Admin
          </Link>

          <button className="nav-logoutbtn" onClick={props.handleLogout}>
            Logout
          </button>

        </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>  
    </nav>
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
