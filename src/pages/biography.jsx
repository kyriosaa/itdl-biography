import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";

function Biography() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <head>
        <title>Biography</title>
        <meta charset="utf-8" />
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
                {/* <ul className="icons">
                <li>
                  <a href="#" className="icon brands fa-twitter"
                    ><span className="label">Twitter</span></a
                  >
                </li>
                <li>
                  <a href="#" className="icon brands fa-facebook-f"
                    ><span className="label">Facebook</span></a
                  >
                </li>
                <li>
                  <a href="#" className="icon brands fa-snapchat-ghost"
                    ><span className="label">Snapchat</span></a
                  >
                </li>
                <li>
                  <a href="#" className="icon brands fa-instagram"
                    ><span className="label">Instagram</span></a
                  >
                </li>
                <li>
                  <a href="#" className="icon brands fa-medium-m"
                    ><span className="label">Medium</span></a
                  >
                </li>
              </ul> */}
              </header>

              {/* -- Content -- */}
              <section>
                <header className="main">
                  <h1>Biography</h1>
                </header>

                <span className="image main">
                  <img src="images/pic11.jpg" alt="" />
                </span>

                <p>
                  Lyn Shun-Lien Sung is a pioneering pharmacist and business
                  leader dedicated to advancing women's roles in science and
                  technology. As the Head of Weigong Trading Co., Ltd. and Vice
                  President at INWES, she has leveraged her extensive experience
                  in pharmacy and pharmaceutical regulations to make significant
                  contributions to the healthcare industry. Sung's commitment to
                  creating a woman-friendly workplace and addressing societal
                  needs is evident through her leadership in various NGOs. Her
                  work is driven by a passion for empowering women and fostering
                  diversity, as exemplified by her role as Chairman of Asia's
                  only Chinese feminist female bookstore. Sung is a visionary
                  leader striving to improve the lives of women by promoting
                  inclusivity and support in both professional and social
                  spheres.
                </p>

                <hr className="major" />

                <p>
                  {/* -- Section -- */}
                  <section>
                    <h2>Organizations</h2>

                    <li>
                      International Network for Women in Science and Technology
                    </li>
                    <li>
                      Executive Supervisor of the Taiwan Society of Women in
                      Science and Technology
                    </li>
                    <li>
                      Supervisor of the National Federation of Taiwan Women’s
                      Groups
                    </li>
                    <li>
                      Taiwan Director of the Society for Pharmaceutical
                      Regulations
                    </li>
                    <li>
                      Managing Director of the China Jingkang Pharmaceutical
                      Foundation
                    </li>
                    <li>
                      Chairman of the only Chinese feminist female bookstore in
                      Asia
                    </li>
                  </section>
                </p>

                <hr className="major" />

                <h2>Professional Skills</h2>

                <li>
                  Qualified cosmetics safety assessor (certificate number issued
                  on December 1, 2019: SA-P-1081025007)
                </li>
                <li>Cosmetics labeling and advertising</li>
                <li>Product registration</li>
                <li>Safety assessment</li>
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

export default Biography;
