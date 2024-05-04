import Navbar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import NoteCreate from "./notes/NoteCreate";
import NoteList from "./notes/NoteList";

function App() {
  <>
    <Router>
      <Navbar />
    </Router>
  </>;
}

export default App;
