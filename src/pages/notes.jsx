import React from "react";
import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookCreate from "../notes/BookCreate";
import BookList from "../notes/BookList";

function Notes() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const handleCreateBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 10000),
        title: title,
      },
    ];
    setBooks(updatedBooks);
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
                <header className="main">
                  <h1>Notes</h1>
                </header>

                <p>
                  <BookList
                    books={books}
                    onEdit={editBookById}
                    onDelete={deleteBookById}
                  />
                  <br />
                  <BookCreate onCreate={handleCreateBook} />
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
