import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Biography from "./pages/biography";
import Timeline from "./pages/timeline";
import NoPage from "./pages/NoPage";
import Notable from "./pages/notable";
import Chatbot from "./pages/chatbot";
import ImageGen from "./pages/imagegen";
import Notes from "./pages/notes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="biography" element={<Biography />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="notable" element={<Notable />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="imagegen" element={<ImageGen />} />
          <Route path="notes" element={<Notes />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import "./index.css";
// import App from "./App";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
