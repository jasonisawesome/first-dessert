import React from "react";
import about from "../images/about.jpg";

const About = () => {
  return (
    <section className="section section--about">
      <h1 className="heading-primary heading-primary--about">About Us</h1>
      <div className="card">
        <div className="card__pic">
          <img src={about} alt="about" className="spice" />
        </div>

        <div className="card__info">
          <h2 className="heading-secondary heading-secondary--card">
            Our Story
          </h2>
          <p className="section__words section__words--card  ">
            Cloud bread listicle etsy, pickled chicharrones letterpress
            activated charcoal ramps lumbersexual. Gluten-free poke etsy, hoodie
            scenester la croix chartreuse cornhole lumbersexual. Tofu church-key
            3 wolf moon tacos snackwave blue bottle schlitz stumptown before
            they sold out. Waistcoat roof party authentic VHS schlitz
            meditation, activated charcoal raw denim gastropub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
