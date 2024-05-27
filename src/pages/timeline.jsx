import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import TimelineAccordion from "../components/timeline/TimelineAccordion";

function Timeline() {
  const items = [
    {
      id: "1982",
      label: "1982",
      content:
        "Graduated from the pharmacy department at Taiwan University and obtained pharmacist license (License number: 藥字第009685號) and started working at Asia University Memorial Hospital, where she was involved inestablishing advanced medication prescription systems.",
      photo: (
        <span className="image object">
          <img src="images/1982.jpg" alt="Asia University Memorial Hospital" />
        </span>
      ),
    },
    {
      id: "1990",
      label: "1990",
      content:
        "Started working at an international trade law firm specializing in pharmaceutical, food, and cosmetic regulations.",
      photo: <span className="image object"></span>,
    },
    {
      id: "1994",
      label: "1994",
      content:
        "Participated in the Women's Knowledge Foundation, marking a significant change in her life.",
      photo: <span className="image object"></span>,
    },
    {
      id: "1997",
      label: "1997",
      content:
        "Established her own studio focusing on pharmaceutical, food, and cosmetic regulations.",
      photo: <span className="image object"></span>,
    },
    {
      id: "2002",
      label: "2002",
      content:
        "Founded MRS Micro-Work Co., Ltd., where she serves as the head responsible for pharmaceutical, food, and cosmetic regulations.",
      photo: (
        <span className="image object">
          <img
            src="images/2002.jpg"
            alt="MRS Micro-Work's offices during work hours"
          />
        </span>
      ),
    },
    {
      id: "2011",
      label: "2011",
      content:
        "Served as the Secretary-General for the 60th anniversary committee of the Taiwan University School of Pharmacy.",
      photo: (
        <span className="image object">
          <img
            src="images/2011-2013.jpg"
            alt="Meeting held by National Taiwan University's School of Pharmacy"
          />
        </span>
      ),
    },
    {
      id: "2015",
      label: "2015",
      content:
        "Served as the Chairperson of The Society of Taiwan Women in Science and Technology.",
      photo: (
        <span className="image object">
          <img
            src="images/2015.jpg"
            alt="The Society of Taiwan Women in Science and Technology"
          />
        </span>
      ),
    },
    {
      id: "2019",
      label: "2019",
      content:
        "Appointed as Vice President for Industry and Enterprise at the International Network of Women Engineers and Scientists (INWES).",
      photo: (
        <span className="image object">
          <img
            src="images/2019.jpg"
            alt="International Network of Women Engineers and Scientists Logo"
          />
        </span>
      ),
    },
    {
      id: "2021",
      label: "2021",
      content:
        "Became the Chairperson of the only Chinese feminist bookstore in Asia.",
      photo: <span className="image object"></span>,
    },
  ];

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
              </header>

              {/* -- Content -- */}
              <section>
                <header className="main">
                  <h1>Timeline</h1>
                  <strong>Let's take a look at a timeline of her life</strong>
                </header>
                <br />
                <TimelineAccordion items={items} />
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
