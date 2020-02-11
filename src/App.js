import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Layout/Navbar";
import Header from "./Components/Header";
import FeaturedEvent from "./Components/FeaturedEvent";
import Events from "./Components/events";
import Team from "./Components/Team";
function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Header />
        <FeaturedEvent />
        <Events />
        <Team />
      </div>
    </Router>
  );
}

export default App;
