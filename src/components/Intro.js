import React from "react";
import feature1 from "../images/feature1.jpg";
import feature2 from "../images/feature2.jpg";
import feature3 from "../images/feature3.jpg";


const Intro = () => {
  return (
    <section className="section section--intro">
      <h2 className="heading-secondary heading-secondary--intro">
        gourmet  dessert  for  dessert  lover
      </h2>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary">
            You're going to fall in love with our dessert
          </h3>
          <p className="section__words section__words--intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h3 className="heading-tertiary">
            real chinese dessert with real ingredients
          </h3>
          <p className="section__words section__words--intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="col-1-of-2">
          <div className="composition">
            <img src={feature1} alt="feature1" className="composition__photo composition__photo--p1" />
            <img src={feature2} alt="feature2"  className="composition__photo composition__photo--p2"/>
            <img src={feature3} alt="feature3"  className="composition__photo composition__photo--p3"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
