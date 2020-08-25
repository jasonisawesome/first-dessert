import React from "react";
import spice from "../images/spice.jpg"

const Card = () => {
  return (
    <section className="card">
      <div className="card__pic">
       <img src={spice} alt="spice" className="spice"/>   
      </div>
      <div className="card__info">
        <h2 className="heading-secondary heading-secondary--card">It's not just dessert, it's tradition</h2>
        <p className="section__words section__words--card  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. 
        </p>
      </div>
    </section>
  );
};

export default Card;
