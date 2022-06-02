import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FiLogIn, FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { NavbarContainer } from "./navbarStyled";
import { MdFavorite } from "react-icons/md";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import { cartContext } from "../context/CartContext";
import { favoriteContext } from "../context/FavoritesContext";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

const Navbar = (props) => {
  const { cartItems } = useContext(cartContext);
  const { favorites } = useContext(favoriteContext);
  const total = cartItems.reduce(
    (previous, current) => previous + current.amount,
    0
  );
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);
  return (
    <NavbarContainer>
      <div>
        <div className="container-search">
          <Link to={"/search"}>
            <p className="search">BUSCAR</p>
          </Link>
        </div>
        <div className="navbar-center">
          <Link to={PATHS.HOMEPAGE}>
            <img
              src="https://res.cloudinary.com/aleksmotin/image/upload/v1653992753/logonavbar_hqdjsf.png"
              alt="Logo"
            />
          </Link>
          <div className="navbar_menu">
            <Link to={"/"}>INICIO</Link>
            <a href="/shopping">TIENDA</a>
            <Link className="collection-link" to={PATHS.COLLECTIONS}>
              <a
                onMouseEnter={() => setIsShownHoverContent(true)}
                onMouseDown={() => setIsShownHoverContent(true)}
                onMouseLeave={() => setIsShownHoverContent(false)}
              >
                COLLECIONES
              </a>
            </Link>
            {isShownHoverContent && (
              <div
                onMouseEnter={() => setIsShownHoverContent(true)}
                onMouseLeave={() => setIsShownHoverContent(false)}
                className="navbar-area-collections"
              >
                <div className="navbar-area-collections-content">
                  <li>
                    <Link to={"/summer"}>
                      {" "}
                      <ul> Verano</ul>
                    </Link>
                    <ul>
                      EXCLUSIVA
                      <Link to={"/exclusive"}></Link>
                    </ul>
                    <ul>
                      Primavera
                      <Link to={"/spring"}></Link>
                    </ul>
                    <ul>
                      Invierno
                      <Link to={"/winter"}></Link>
                    </ul>
                  </li>
                </div>
              </div>
            )}

            <Link to={"/sewing"}>COSTURA</Link>
            <Link to={"/aboutus"}>NOSOTRAS</Link>
            {props?.user?.role === "admin" && (
              <Link to={PATHS.ADMIN}>ADMIN</Link>
            )}
          </div>
        </div>
        <div className="navbar_icons">
          {props.user ? (
            <Link
              to={PATHS.HOMEPAGE}
              className="authLink"
              onClick={props.handleLogout}
            >
              <FiLogIn />
            </Link>
          ) : (
            <>
              <Link to={PATHS.LOGINPAGE} className="authLink">
                <FiLogIn />
              </Link>
              <Link to={PATHS.SIGNUPPAGE} className="authLink">
                <FaUserPlus />
              </Link>
            </>
          )}

          <Link
            to={PATHS.HOMEPAGE}
            className="authLink"
            onClick={props.handleLogout}
          >
            <Link to={"/favorites"}>
              <span>
                {" "}
                <MdFavorite></MdFavorite>{" "}
              </span>
            </Link>
            <Link to={"/cart"}>
              {" "}
              <BsBag className="bag-icon" />{" "}
              <span className="cart-count">{total}</span>{" "}
            </Link>
          </Link>
        </div>
      </div>
      <div className="navbar_icons_mobile">
        <div>
          <Link to={"/favorites"}>
            <MdFavorite />
          </Link>
          <p>{favorites.length}</p>
        </div>
        <div>
          <Link to={"/cart"}>
            <BsBag className="bag-icon" />
          </Link>
          <p>{total}</p>
        </div>
      </div>
      {/* <BurgerMenu></BurgerMenu> */}
    </NavbarContainer>
  );
};

export default Navbar;
