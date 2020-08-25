import React from "react";
import tele from "../images/tele.jpg";

const Contact = () => {
  return (
    <section className=" section section--contact ">
      <h1 className="heading-primary heading-primary--contact ">contact us</h1>
      <div className="card">
        <div className="card__pic card__pic--contact">
          <img src={tele} alt="tele" className="spice" />
        </div>

        <div className="card__info">
          <div className="section__words section__words--card  ">
            <h2 className="heading-secondary">phone</h2>
            <p className="section__words section__words--contact ">
              (778) 522 5857
            </p>
            <h2 className="heading-secondary">location</h2>
            <p className="section__words section__words--contact">
              alder street
            </p>
            <h2 className="heading-secondary">hours</h2>
            <p className="section__words section__words--contact">9-9pm</p>
            <h2 className="heading-secondary">email</h2>
            <p className="section__words section__words--contact">gmail@com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
