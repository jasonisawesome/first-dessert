import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const handleIns = () => {
    return window.open("https://www.instagram.com/thefirstdessert");
  };

  return (
    <section className="footer">
      <div className="footer__column">
        <h3 className="heading-tertiary">address</h3>
        <p className="section__words section__words--footer">
          5857 Victoria Dr
        </p>
        <p className="section__words section__words--footer">
          Vancouver, BC V5P 3P9
        </p>
      </div>
      <div className="footer__column">
        <h3 className="heading-tertiary">socials</h3>
        <AiOutlineInstagram className="footer__icon" onClick={handleIns} />
      </div>
      <div className="footer__column">
        <h3 className="heading-tertiary">contacts</h3>
        <p className="section__words section__words--footer">(778) 522 5857</p>
      </div>
    </section>
  );
};

export default Footer;
