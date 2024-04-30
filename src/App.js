import Navbar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import BookCreate from "./notes/BookCreate";
import BookList from "./notes/BookList";

function App() {
  <>
    <Router>
      <Navbar />
    </Router>
  </>;
}

export default App;
