import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";

function Notable() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <head>
        <title>Notable Works</title>
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
                  <h1>Notable Works</h1>
                </header>

                <hr className="major" />

                <>
                  {/* -- Section -- */}
                  <section>
                    <h2>Founder of “Micro-work”</h2>

                    <p>
                      Lyn Shun-Lien Sung personally understood the situation of
                      women working in the technology field who "cannot express
                      themselves" after marriage, and further thought about how
                      women can balance work and family. In 1997, she left her
                      job at a law firm. She later established her own studio
                      and started to assist in individual legal affairs. Through
                      introductions and recommendations from customers, the
                      studio's business volume grew steadily. Lyn Shun-Lien Sung
                      gradually recruited a group of women with scientific and
                      technological backgrounds, allowing them to use their
                      talents and have a stable income to support these women in
                      their families and businesses.
                    </p>
                  </section>
                </>

                <hr className="major" />

                <h2>Feminism Bookstore</h2>

                <>
                  <a href="https://maps.app.goo.gl/qxUPE47bnP4t7d127?g_st=il">
                    女書店 (Fembooks)
                  </a>{" "}
                  , the first feminist bookstore in the area, takes the
                  promotion of gender equality as its own responsibility. After
                  years of hard work, it was classified as a Taiwanese women's
                  cultural landmark in 2007 and became a popular destination for
                  foreign tourists, a place of pilgrimage for those who care
                  about gender issues. In addition to selling books, the Women's
                  Bookstore also cooperates with elementary and middle schools
                  to promote the "Gender-Friendly Dandelion Project".
                </>
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

export default Notable;
