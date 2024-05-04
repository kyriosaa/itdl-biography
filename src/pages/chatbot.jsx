import React, { useState } from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import OpenAI from "openai";
// import UserPic from "../images/user.jpg";
// import ChatGptPic from "../images/chatgpt.jpg";

const openai = new OpenAI({
  // apiKey: "sk-proj-toc7CHiZlRVFl8WppVF0T3BlbkFJbVIVfyEhAC64crcNBGIE",
  apiKey: process.env["REACT_APP_OPENAI_API_KEY"],
  dangerouslyAllowBrowser: true,
});

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);
    setMessage("");

    await openai.chat.completions
      .create({
        model: "gpt-4-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant",
          },
          // Gives AI the history of the chats
          ...chats,
        ],
      })
      .then((result) => {
        msgs.push(result.choices[0].message);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <head>
        <title>Notes</title>
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
                <h1>AI Chatbot</h1>
                <strong>
                  This is a chatbot that you can use to ask questions! Try
                  typing any question in and see what it says back!
                </strong>
                <br />
                <br />
                <br />
                <div>
                  <section>
                    {chats && chats.length
                      ? chats.map((chat, index) => (
                          <p
                            key={index}
                            className={chat.role === "user" ? "user_msg" : ""}
                          >
                            <span>{chat.role}</span>
                            <span>:</span>
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

                  <form onSubmit={(e) => chat(e, message)}>
                    <input
                      type="text"
                      name="message"
                      value={message}
                      placeholder="Send a message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </form>
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

export default Chatbot;
