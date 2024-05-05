import React, { useState } from "react";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function Chatroom() {
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
    <section>
      <h1>AI Chatbot</h1>
      <strong>
        This is a chatbot that you can use to ask questions! Try typing any
        question in and see what it says back!
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
  );
}

export default Chatroom;
