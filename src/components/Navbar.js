import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../images/logo1.svg";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
   
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__center">
        <div className="navbar__header">
          <Link to="/">
            <img src={logo1} alt="first dessert logo" className="logo" />
          </Link>
          <button type="button" className="navbar__btn" onClick={handleToggle}>
            <FaAlignRight className="navbar__icon" />
          </button>
        </div>

        <ul
          className={
            isOpen ? "navbar__links  navbar__links--show" : "navbar__links"
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
