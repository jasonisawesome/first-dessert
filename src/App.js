import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Footer from './components/Footer';




function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/contact" component={Contact}/>
        <Error  component={Error} />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
