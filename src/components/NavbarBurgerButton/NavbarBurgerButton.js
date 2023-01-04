import React from "react";
import "./NavbarBurgerButton.css";
function NavbarBurgerButton({ setClicked, clicked }) {
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`nav-icon-5  ${clicked ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default NavbarBurgerButton;
