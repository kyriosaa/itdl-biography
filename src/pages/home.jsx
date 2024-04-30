import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <head>
        <title>Timeline</title>
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
                  <strong>Interactive Technology and Digital Learning</strong>
                  <br />
                  Final Project Demo
                </Link>
              </header>

              {/* -- Banner -- */}
              <section id="banner">
                <div className="content">
                  <header>
                    <h1>宋順蓮董事長</h1>
                    <h2>Lyn Shun-Lien Sung</h2>
                  </header>
                  <p>
                    Aenean ornare velit lacus, ac varius enim ullamcorper eu.
                    Proin aliquam facilisis ante interdum congue. Integer
                    mollis, nisl amet convallis, porttitor magna ullamcorper,
                    amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam
                    maximus erat id euismod egestas. Pellentesque sapien ac
                    quam. Lorem ipsum dolor sit nullam.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/biography" className="button big">
                        Learn More
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="image object">
                  <img
                    src="images/lynshunliensung-profile.jpg"
                    alt="Photo of Lyn Shun-Lien Sung holding a book"
                  />
                </span>
              </section>

              {/* -- Section -- */}
              <section>
                <header className="major">
                  <h2>Navigation</h2>
                </header>
                <div className="posts">
                  <article>
                    <Link to="/biography" className="image">
                      <img src="images/pic01.jpg" alt="" />
                    </Link>
                    <h3>Biography</h3>
                    <ul className="actions">
                      <li>
                        <Link to="/biography" className="button">
                          Go
                        </Link>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <Link to="/timeline" className="image">
                      <img src="images/pic02.jpg" alt="" />
                    </Link>
                    <h3>Timeline</h3>
                    <ul className="actions">
                      <li>
                        <Link to="/timeline" className="button">
                          Go
                        </Link>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <Link to="/notable" className="image">
                      <img src="images/pic03.jpg" alt="" />
                    </Link>
                    <h3>Notable Works</h3>
                    <ul className="actions">
                      <li>
                        <Link to="/notable" className="button">
                          Go
                        </Link>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <Link to="/chatbot" className="image">
                      <img src="images/pic04.jpg" alt="" />
                    </Link>
                    <h3>AI Chatbot</h3>
                    <ul className="actions">
                      <li>
                        <Link to="/chatbot" className="button">
                          Go
                        </Link>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <Link to="/imagegen" className="image">
                      <img src="images/pic05.jpg" alt="" />
                    </Link>
                    <h3>Image Generation</h3>
                    <ul className="actions">
                      <li>
                        <Link to="/imagegen" className="button">
                          Go
                        </Link>
                      </li>
                    </ul>
                  </article>
                  <article>
                    <Link to="/notes" className="image">
                      <img src="images/pic06.jpg" alt="" />
                    </Link>
                    <h3>Notes</h3>
                    <ul className="actions">
                      <li>
                        <Link to="/notes" className="button">
                          Go
                        </Link>
                      </li>
                    </ul>
                  </article>
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

export default Home;
