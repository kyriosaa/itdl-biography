import React, { useState } from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function Home() {
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const chat = async () => {
    setIsTyping(true);
    setButtonClicked(true);

    let msgs = [...chats];
    const message = "Who is Lyn Shun-Lien Sung?";
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    await openai.chat.completions
      .create({
        model: "gpt-4-turbo",
        messages: [
          {
            role: "system",
            content:
              "You will always reply with the same text: Lyn Shun-Lien Sung is a pioneering pharmacist and business leader dedicated to advancing women's roles in science and technology. As the Head of Weigong Trading Co., Ltd. and Vice President at INWES, she has leveraged her extensive experience in pharmacy and pharmaceutical regulations to make significant contributions to the healthcare industry. Sung's commitment to creating a woman-friendly workplace and addressing societal needs is evident through her leadership in various NGOs. Her work is driven by a passion for empowering women and fostering diversity, as exemplified by her role as Chairman of Asia's only Chinese feminist female bookstore. Sung is a visionary leader striving to improve the lives of women by promoting inclusivity and support in both professional and social spheres.",
          },
          // Gives AI the history of the chats
          ...msgs,
        ],
      })
      .then((result) => {
        msgs.push(result.choices[0].message);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
        setIsTyping(false);
      });
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <head>
        <title>Home</title>
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
              {/* -- Banner -- */}
              <section id="banner">
                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40vh",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <header
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h1>宋順蓮董事長</h1>
                      <h2>Lyn Shun-Lien Sung</h2>
                    </header>
                    <span className="image object">
                      <img
                        src="images/lynshunliensung-profile.jpg"
                        alt="Lyn Shun-Lien Sung holding a book"
                        style={{ objectFit: "contain" }}
                      />
                    </span>
                  </div>
                </div>
              </section>
              {/* ChatGPT */}
              <section>
                <section style={{ marginBottom: "20px" }}>
                  <strong>Let's ask ChatGPT who Lyn Shun-Lien Sung is!</strong>
                </section>
                <section>
                  {chats && chats.length
                    ? chats.map((chat, index) => (
                        <p
                          key={index}
                          className={chat.role === "user" ? "user_msg" : ""}
                          style={{ marginBottom: "10px" }}
                        >
                          <img
                            src={
                              chat.role === "user"
                                ? "images/user.jpg"
                                : "images/chatgpt.jpg"
                            }
                            width={35}
                            height={35}
                            alt="pfp"
                            style={{ marginRight: "10px" }}
                          />
                          <span> - </span>
                          <span>{chat.content}</span>
                        </p>
                      ))
                    : ""}
                </section>
                {isTyping ? (
                  <div>
                    <p>
                      <i>Typing...</i>
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <button onClick={chat} disabled={buttonClicked}>
                  Who is Lyn Shun-Lien Sung?
                </button>
              </section>
              {/* -- Section -- */}
              <section>
                <header className="major">
                  <h2>Navigation</h2>
                </header>
                <div className="posts">
                  <article>
                    <Link to="/biography" className="image">
                      <img
                        src="images/biography-navigation.jpg"
                        alt="An old book next to a cup of coffee"
                        height={"210px"}
                      />
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
                      <img
                        src="images/timeline-navigation.jpg"
                        alt="A pocketwatch resting on a calendar"
                        height={"210px"}
                      />
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
                      <img
                        src="images/notable-navigation.jpg"
                        alt="Library full of books"
                        height={"210px"}
                      />
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
                      <img
                        src="images/aichatbot-navigation.jpg"
                        alt="Hand holding up a hologram of a chatbot"
                        height={"210px"}
                      />
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
                      <img
                        src="images/imagegen-navigation.jpg"
                        alt="AI generated"
                        height={"210px"}
                      />
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
                      <img
                        src="images/notes-navigation.jpg"
                        alt="Person writing on notes using a pencil"
                        height={"210px"}
                      />
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
