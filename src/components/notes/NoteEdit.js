import { useState } from "react";

function NoteEdit({ note, onSubmit }) {
  const [title, setTitle] = useState(note.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(note.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="major">
      <h3>Edit note</h3>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button big">Save</button>
    </form>
  );
}

export default NoteEdit;
