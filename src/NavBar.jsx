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
              <Link to="/imagegen">Image Generator</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            {/* <li>
              <a href="elements.html">Elements</a>
            </li> */}
          </ul>
        </nav>

        {/* -- Section --
        <section>
          <header className="major">
            <h2>Ante interdum</h2>
          </header>
          <div className="mini-posts">
            <article>
              <a href="#" className="image">
                <img src="images/pic07.jpg" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <a href="#" className="image">
                <img src="images/pic08.jpg" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <a href="#" className="image">
                <img src="images/pic09.jpg" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
          </div>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                More
              </a>
            </li>
          </ul>
        </section> */}

        {/* -- Section --
        <section>
          <header className="major">
            <h2>Get in touch</h2>
          </header>
          <p>
            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
            facilisis ante interdum. Sed nulla amet lorem feugiat tempus
            aliquam.
          </p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="#">information@untitled.tld</a>
            </li>
            <li className="icon solid fa-phone">(000) 000-0000</li>
            <li className="icon solid fa-home">
              1234 Somewhere Road #8254
              <br />
              Nashville, TN 00000-0000
            </li>
          </ul>
        </section> */}

        {/* -- Footer -- */}
        <footer id="footer">
          <p className="copyright">
            <div>
              Created by:
              <br />
              Purit Hongjirakul (109990016)
              <br />
              許金財 (110AT0003)
              <br />
              Grant
            </div>
            <br />
            <div>
              HTML template by:
              <Link to="https://html5up.net"> HTML5 UP</Link>
            </div>
            <br />
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
