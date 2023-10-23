import React from "react";
import "../HomeScreen/HomeScreen.css";
import Nav from "../Nav/Nav.js";
import Fogo from "../Fogo/Fogo.js";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Fogo />
    </div>
  );
}

export default HomeScreen;
