import React from "react";
import "../../App.css";
import SinglePagePDFViewer from "./single-page";
import AllPagesPDFViewer from "./all-page";
import samplePDF from "./test.pdf";
import "./styles.css";
import { pdfjs } from "react-pdf";
import worker from "pdfjs-dist/webpack";
import { Link } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

export default function Report() {
  return (
    <div className="Report">
      <div>
        <a
          href={process.env.PUBLIC_URL + "/assets/files/test.pdf"}
          target="_blank"
          download
        >
          Click here to download the report
        </a>
      </div>

      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={samplePDF} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>

      <hr />
    </div>
  );
}
