import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import ImageGenerator from "../components/imagegen/generator/ImageGenerator";

function ImageGen() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <head>
        <title>AI Image Generator</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="stylesheet" href="assets/css/main.css" />
      </head>
      <div className="is-preload">
        {/* -- Wrapper -- */}
        <div id="wrapper">
          {/* -- Main -- */}
          <div id="main">
            <div className="inner">
              {/* -- Header -- */}
              <header id="header">
                <Link to="/" className="logo">
                  <strong>Interactive Technology and Digital Learning </strong>-
                  Final Project Demo
                </Link>
              </header>

              {/* -- Content -- */}
              <section>
                <header className="main">
                  <h1>AI Image Generator</h1>
                </header>

                <ImageGenerator />
              </section>
            </div>
          </div>
          <Navbar />
        </div>

        {/* -- Scripts -- */}
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    </div>
  );
}

export default ImageGen;
