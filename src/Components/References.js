import React from "react";
import "../App.css";

function References() {
  return (
    <div className="references">
      <h2 style={{ textAlign: "left" }}>References</h2>
      <ol style={{ textAlign: "left" }}>
        <li>
          <a
            href="https://quantum-computing.ibm.com/composer/docs/iqx/guide/shors-algorithm"
            target="_blank"
            rel="noreferrer"
          >
            IBM Quantum Computing - Shor's Algorithm{" "}
          </a>{" "}
        </li>
        <li>
          <a
            href="https://qiskit.org/textbook/ch-algorithms/shor.html"
            target="_blank"
            rel="noreferrer"
          >
            Qiskit - Shor's Algorithm{" "}
          </a>{" "}
        </li>
        <li>
          <a
            href="https://www.topcoder.com/blog/shors-algorithm-in-quantum-computing/"
            target="_blank"
            rel="noreferrer"
          >
            Topcode - Shor's Algorithm{" "}
          </a>{" "}
        </li>
        <li>
          <a
            href="https://arxiv.org/abs/quant-ph/9508027"
            target="_blank"
            rel="noreferrer"
          >
            Academic paper{" "}
          </a>{" "}
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UClBNq7mCMf5xm8baE_VMl3A"
            target="_blank"
            rel="noreferrer"
          >
            Qiskit Youtube{" "}
          </a>{" "}
        </li>
      </ol>
    </div>
  );
}

export default References;
