import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="sidebar">
      <div className="inner">
        {/* -- Menu -- */}
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/biography">Biography</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/notable">Notable Works</Link>
            </li>
            <li>
              <Link to="/chatbot">AI Chatbot</Link>
            </li>
            <li>
              <Link to="/imagegen">AI Image Generator</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            {/* <li>
              <a href="elements.html">Elements</a>
            </li> */}
          </ul>
        </nav>

        {/* -- Footer -- */}
        <footer id="footer">
          <p className="copyright">
            <div>
              Created by:
              <br />
              Purit Hongjirakul (109990016)
              <br />
              Grant Liu (110AT0001)
              <br />
              Vipatr Kuptasanti (110AT0003)
            </div>

            <br />

            {/* <div>
              HTML template by:
              <Link to="https://html5up.net"> HTML5 UP</Link>
            </div>

            <br /> */}

            <div>
              Project created for Interactive Technology and Digital Learning
              class.
              <br />
              Professor Hsiao-Mei Lin
            </div>
          </p>
        </footer>

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

export default Navbar;
