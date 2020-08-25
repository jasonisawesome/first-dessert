import React from "react";
import menu from "../images/menu.jpg";

const Menu = () => {
  return (
    <section className="section section-menu">
      <h1 className="heading-primary heading-primary--Menu">Our Menu</h1>

      <img src={menu} alt="menu" className="menu" />
    </section>
  );
};

export default Menu;
