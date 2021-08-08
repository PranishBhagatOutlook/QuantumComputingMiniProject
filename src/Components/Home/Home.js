import React from "react";
import "../../App.css";
import image from "./quantumcomputing.jpeg";

function Home() {
  return (
    <div className="Home">
      <p>
        This is a simple frontend that is submitted as a part of mini project
        assignment for Quantum Computing.
      </p>
      <div>
        <img className="qc" src={image} alt="quantumcomputing" />
      </div>
    </div>
  );
}

export default Home;
