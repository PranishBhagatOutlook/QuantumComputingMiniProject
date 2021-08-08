import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      <p>
        This is a simple frontend that is submitted as a part of mini project
        assignment for Quantum Computing.
      </p>
      <div>
        <img
          className="mardi_1"
          src={process.env.PUBLIC_URL + "assets/images/quantumcomputing.jpeg"}
          alt="quantumcomputing"
        />
      </div>
    </div>
  );
}

export default Home;
