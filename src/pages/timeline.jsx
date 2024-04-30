import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Timeline() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  return (
    <div>
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
              </header>

              {/* -- Content -- */}
              <section>
                <header className="main">
                  <h1>Timeline</h1>
                </header>

                {/* <span className="image main">
                  <img src="images/pic11.jpg" alt="" />
                </span> */}

                <hr className="major" />
                <div>
                  <button
                    className="button none"
                    style={{ height: "40px", width: "1250px" }}
                    onClick={() => setIsOpen1(!isOpen1)}
                  >
                    <h2>1982</h2>
                  </button>
                  {isOpen1 && (
                    <div className="content" id="banner">
                      <p>
                        Graduated from the pharmacy department at Taiwan
                        University and obtained pharmacist license (License
                        number: 藥字第009685號) and started working at Asia
                        University Memorial Hospital, where she was involved in
                        establishing advanced medication prescription systems.
                      </p>
                      <span className="image object">
                        <img
                          src="images/1982.jpg"
                          alt="Asia University Memorial Hospital"
                        />
                      </span>
                    </div>
                  )}
                </div>

                <hr className="major" />
                <div>
                  <button
                    className="button none"
                    style={{ height: "40px", width: "1250px" }}
                    onClick={() => setIsOpen2(!isOpen2)}
                  >
                    <h2>1990</h2>
                  </button>
                  {isOpen2 && (
                    <div className="content" id="banner">
                      <p>
                        Started working at an international trade law firm
                        specializing in pharmaceutical, food, and cosmetic
                        regulations.
                      </p>
                    </div>
                  )}
                </div>

                <hr className="major" />
                <div>
                  <button
                    className="button none"
                    style={{ height: "40px", width: "1250px" }}
                    onClick={() => setIsOpen3(!isOpen3)}
                  >
                    <h2>1994</h2>
                  </button>
                  {isOpen3 && (
                    <div className="content" id="banner">
                      <p>
                        Participated in the Women's Knowledge Foundation,
                        marking a significant change in her life.
                      </p>
                    </div>
                  )}
                </div>

                <hr className="major" />
                <div>
                  <button
                    className="button none"
                    style={{ height: "40px", width: "1250px" }}
                    onClick={() => setIsOpen4(!isOpen4)}
                  >
                    <h2>1997</h2>
                  </button>
                  {isOpen4 && (
                    <div className="content" id="banner">
                      <p>
                        Established her own studio focusing on pharmaceutical,
                        food, and cosmetic regulations.
                      </p>
                    </div>
                  )}
                </div>

                <hr className="major" />
                <div>
                  <button
                    className="button none"
                    style={{ height: "40px", width: "1250px" }}
                    onClick={() => setIsOpen5(!isOpen5)}
                  >
                    <h2>2002</h2>
                  </button>
                  {isOpen5 && (
                    <div className="content" id="banner">
                      <p>
                        Founded{" "}
                        <Link to="http://www.twepress.net/english/item/1214-mrs-micro-work-leading-the-way-for-gender-friendly-workplaces">
                          MRS Micro-Work Co., Ltd.
                        </Link>
                        , where she serves as the head responsible for
                        pharmaceutical, food, and cosmetic regulations.
                      </p>
                      <span className="image object">
                        <img
                          src="images/2002.jpg"
                          alt="MRS Micro-Work's offices during work hours"
                        />
                      </span>
                    </div>
                  )}
                </div>

                <hr className="major" />
                <div>
                  <button
                    className="button none"
                    style={{ height: "40px", width: "1250px" }}
                    onClick={() => setIsOpen6(!isOpen6)}
                  >
                    <h2>2011-2013</h2>
                  </button>
                  {isOpen6 && (
                    <div className="content" id="banner">
                      <p>
                        Served as the Secretary-General for the 60th anniversary
                        committee of the{" "}
                        <Link to="https://rx.mc.ntu.edu.tw/index.php?malangue=EN">
                          Taiwan University School of Pharmacy
                        </Link>
                        .
                      </p>
                      <span className="image object">
                        <img
                          src="images/2011-2013.jpg"
                          alt="Meeting held by National Taiwan University's School of Pharmacy"
                        />
                      </span>
                    </div>
                  )}
                </div>

                <hr className="major" />
                <div>
                  <button
                    className="button none"
                    style={{ height: "40px", width: "1250px" }}
                    onClick={() => setIsOpen7(!isOpen7)}
                  >
                    <h2>2015</h2>
                  </button>
                  {isOpen7 && (
                    <div className="content" id="banner">
                      <p>
                        Served as the Chairperson of the{" "}
                        <Link to="https://v1.twist.org.tw/en/">
                          The Society of Taiwan Women in Science and Technology
                        </Link>
                        .
                      </p>
                      <span className="image object">
                        <img
                          src="images/2015.jpg"
                          alt="The Society of Taiwan Women in Science and Technology"
                        />
                      </span>
                    </div>
                  )}
                </div>

                <hr className="major" />
                <div>
                  <button
                    className="button none"
                    style={{ height: "40px", width: "1250px" }}
                    onClick={() => setIsOpen8(!isOpen8)}
                  >
                    <h2>2019</h2>
                  </button>
                  {isOpen8 && (
                    <div className="content" id="banner">
                      <p>
                        Appointed as Vice President for Industry and Enterprise
                        at the{" "}
                        <Link to="https://v1.twist.org.tw/en/related-links/about-inwes/">
                          International Network of Women Engineers and
                          Scientists (INWES)
                        </Link>
                        .
                      </p>
                      <span className="image object">
                        <img
                          src="images/2019.jpg"
                          alt="International Network of Women Engineers and
                          Scientists Logo"
                        />
                      </span>
                    </div>
                  )}
                </div>

                <hr className="major" />
                <div>
                  <button
                    className="button none"
                    style={{ height: "40px", width: "1250px" }}
                    onClick={() => setIsOpen9(!isOpen9)}
                  >
                    <h2>2021</h2>
                  </button>
                  {isOpen9 && (
                    <div className="content" id="banner">
                      <p>
                        Became the Chairperson of the only Chinese feminist
                        bookstore in Asia.
                      </p>
                    </div>
                  )}
                </div>
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

export default Timeline;
