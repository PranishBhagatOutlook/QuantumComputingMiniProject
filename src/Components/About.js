import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about">
      <h1>Introduction to quantum computing</h1>
      <p>
        To fully define quantum computing, we need to define some key terms
        first
      </p>
      <h2>What is quantum?</h2>
      <p>
        The quantum in "quantum computing" refers to the quantum mechanics that
        the system uses to calculate outputs. In physics, a quantum is the
        smallest possible discrete unit of any physical property. It usually
        refers to properties of atomic or subatomic particles, such as
        electrons, neutrinos, and photons.
      </p>
      <h2>What is a qubit?</h2>
      <p>
        A qubit is the basic unit of information in quantum computing. Qubits
        play a similar role in quantum computing as bits play in classical
        computing, but they behave very differently. Classical bits are binary
        and can hold only a position of 0 or 1, but qubits can hold a
        superposition of all possible states.
      </p>
      <h2>What is quantum computing? </h2>
      <p>
        Quantum computers harness the unique behavior of quantum physics—such as
        superposition, entanglement, and quantum interference—and apply it to
        computing. This introduces new concepts to traditional programming
        methods.
      </p>
    </div>
  );
}

export default About;
