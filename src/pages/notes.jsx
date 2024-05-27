import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import NoteCreate from "../components/notes/NoteCreate";
import NoteList from "../components/notes/NoteList";

function Notes() {
  const [notes, setNotes] = useState([]);

  const editNoteById = (id, newTitle) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, title: newTitle };
      }

      return note;
    });

    setNotes(updatedNotes);
  };

  const deleteNoteById = (id) => {
    const updatedNotes = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(updatedNotes);
  };

  const handleCreateNote = (title) => {
    const updatedNotes = [
      ...notes,
      {
        id: Math.round(Math.random() * 10000),
        title: title,
      },
    ];
    setNotes(updatedNotes);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
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
                <header className="main">
                  <h1>Notes</h1>
                  <strong>
                    You can use this area to create, edit, and delete notes!
                    <br />
                    (Since we did not create a database for the notes, please be
                    aware that refreshing the page will remove the notes)
                  </strong>
                </header>
                <hr className="major" />

                <p>
                  <NoteList
                    notes={notes}
                    onEdit={editNoteById}
                    onDelete={deleteNoteById}
                  />
                  <br />
                  <NoteCreate onCreate={handleCreateNote} />
                </p>

                <hr className="major" />
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

export default Notes;
