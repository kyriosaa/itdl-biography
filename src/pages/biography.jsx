import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";

function Home() {
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
                  <strong>Interactive Technology and Digital Learning</strong>
                  <br />
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
                  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Pellentesque venenatis dolor imperdiet
                  dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas
                  enim auctor sit amet. Pellentesque leo mauris, consectetur id
                  ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia
                  malesuada et a elit. Donec urna ex, lacinia in purus ac,
                  pretium pulvinar mauris. Curabitur sapien risus, commodo eget
                  turpis at, elementum convallis elit. Pellentesque enim turpis,
                  hendrerit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dapibus rutrum facilisis. className aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Etiam tristique libero eu nibh porttitor fermentum. Nullam
                  venenatis erat id vehicula viverra. Nunc ultrices eros ut
                  ultricies condimentum. Mauris risus lacus, blandit sit amet
                  venenatis non, bibendum vitae dolor. Nunc lorem mauris,
                  fringilla in aliquam at, euismod in lectus. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. In non lorem sit amet elit placerat
                  maximus. Pellentesque aliquam maximus risus, vel sed vehicula.
                </p>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
                  Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
                  Pellentesque leo mauris, consectetur id ipsum sit amet,
                  fersapien risus, commodo eget turpis at, elementum convallis
                  elit. Pellentesque enim turpis, hendrerit tristique lorem
                  ipsum dolor.
                </p>

                <hr className="major" />

                <p>
                  {/* -- Section -- */}
                  <section>
                    <header className="major">
                      <h2>Notable</h2>
                    </header>
                    <div className="features">
                      <article>
                        <span className="icon fa-gem"></span>
                        <div className="content">
                          <h3>Portitor ullamcorper</h3>
                          <p>
                            Aenean ornare velit lacus, ac varius enim lorem
                            ullamcorper dolore. Proin aliquam facilisis ante
                            interdum. Sed nulla amet lorem feugiat tempus
                            aliquam.
                          </p>
                        </div>
                      </article>
                      <article>
                        <span className="icon solid fa-paper-plane"></span>
                        <div className="content">
                          <h3>Sapien veroeros</h3>
                          <p>
                            Aenean ornare velit lacus, ac varius enim lorem
                            ullamcorper dolore. Proin aliquam facilisis ante
                            interdum. Sed nulla amet lorem feugiat tempus
                            aliquam.
                          </p>
                        </div>
                      </article>
                      <article>
                        <span className="icon solid fa-rocket"></span>
                        <div className="content">
                          <h3>Quam lorem ipsum</h3>
                          <p>
                            Aenean ornare velit lacus, ac varius enim lorem
                            ullamcorper dolore. Proin aliquam facilisis ante
                            interdum. Sed nulla amet lorem feugiat tempus
                            aliquam.
                          </p>
                        </div>
                      </article>
                      <article>
                        <span className="icon solid fa-signal"></span>
                        <div className="content">
                          <h3>Sed magna finibus</h3>
                          <p>
                            Aenean ornare velit lacus, ac varius enim lorem
                            ullamcorper dolore. Proin aliquam facilisis ante
                            interdum. Sed nulla amet lorem feugiat tempus
                            aliquam.
                          </p>
                        </div>
                      </article>
                    </div>
                  </section>
                </p>

                <hr className="major" />

                <h2>Magna etiam veroeros</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dapibus rutrum facilisis. className aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Etiam tristique libero eu nibh porttitor fermentum. Nullam
                  venenatis erat id vehicula viverra. Nunc ultrices eros ut
                  ultricies condimentum. Mauris risus lacus, blandit sit amet
                  venenatis non, bibendum vitae dolor. Nunc lorem mauris,
                  fringilla in aliquam at, euismod in lectus. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. In non lorem sit amet elit placerat
                  maximus. Pellentesque aliquam maximus risus, vel sed vehicula.
                </p>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
                  Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
                  Pellentesque leo mauris, consectetur id ipsum sit amet,
                  fersapien risus, commodo eget turpis at, elementum convallis
                  elit. Pellentesque enim turpis, hendrerit tristique lorem
                  ipsum dolor.
                </p>

                <hr className="major" />

                <h2>Lorem aliquam bibendum</h2>
                <p>
                  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Pellentesque venenatis dolor imperdiet
                  dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas
                  enim auctor sit amet. Pellentesque leo mauris, consectetur id
                  ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia
                  malesuada et a elit. Donec urna ex, lacinia in purus ac,
                  pretium pulvinar mauris. Curabitur sapien risus, commodo eget
                  turpis at, elementum convallis elit. Pellentesque enim turpis,
                  hendrerit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dapibus rutrum facilisis. className aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Etiam tristique libero eu nibh porttitor fermentum. Nullam
                  venenatis erat id vehicula viverra. Nunc ultrices eros ut
                  ultricies condimentum. Mauris risus lacus, blandit sit amet
                  venenatis non, bibendum vitae dolor. Nunc lorem mauris,
                  fringilla in aliquam at, euismod in lectus. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. In non lorem sit amet elit placerat
                  maximus. Pellentesque aliquam maximus risus, vel sed vehicula.
                </p>
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
