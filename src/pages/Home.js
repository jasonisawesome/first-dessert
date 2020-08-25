import React from "react";
import { Link } from "react-router-dom";
import Intro from "./../components/Intro";
import Card from "./../components/Card";
import MyMap from "../components/MyMap";


const Home = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="banner">
          <h1 className="heading-primary heading-primary--banner">
            Traditional Chinese Dessert
          </h1>
          <p className="section__words section__words--banner">
            try our dessert
          </p>
          <Link to="/menu" className="btn">
            Our Menu
          </Link>
        </div>
      </header>
      <main>
        <Intro />
        <Card />
        <MyMap />
      </main>
    </React.Fragment>
  );
};

export default Home;
