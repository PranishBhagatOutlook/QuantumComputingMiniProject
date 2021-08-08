import React from "react";
import "../App.css";

function Home() {
  let githubUrl =
    "https://github.com/PranishBhagatOutlook/QuantumComputingMiniProject";
  let notebookUrl = "https://github.com/PranishBhagatOutlook/qcNotebook";
  return (
    <div className="Home">
      <h1>My submission for the mini project for Quantum Computing.</h1>
      <h2 style={{ textAlign: "left" }}>Things done:</h2>
      <ol style={{ textAlign: "left" }}>
        <li>
          Implemented{" "}
          <a
            href="https://arxiv.org/abs/quant-ph/9508027"
            target="_blank"
            rel="noreferrer"
          >
            <b>Shor's Algorithm</b>
          </a>{" "}
          using{" "}
          <a href="https://qiskit.org/" target="_blank" rel="noreferrer">
            <i>Qiskit</i>
          </a>{" "}
          . Jupyter Notebook link attached{" "}
          <a href={notebookUrl} target="_blank" rel="noreferrer">
            {" "}
            here{" "}
          </a>
        </li>
        <li>
          Developed this website which contains all the details regarding the
          algorithm. Github link for this site attached{" "}
          <a href={githubUrl} target="_blank" rel="noreferrer">
            {" "}
            here{" "}
          </a>
        </li>
        <li>
          Prepared a review report on the implementation. Download the report
          <a
            href={process.env.PUBLIC_URL + "/assets/files/algorithm.pdf"}
            target="_blank"
            download
            rel="noreferrer"
          >
            {" "}
            here
          </a>
        </li>
      </ol>

      <div>
        <img
          className="qc"
          src={process.env.PUBLIC_URL + "/assets/images/quantumcomputing.jpeg"}
          alt="quantumcomputing"
        />
      </div>
    </div>
  );
}

export default Home;
