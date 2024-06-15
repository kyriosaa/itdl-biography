import { useState } from "react";

function NoteCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="major">
      <h3>Add a Note</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={title}
          onChange={handleChange}
          placeholder="Write your note here"
        />
        <button className="button big" style={{ marginTop: 15 }}>
          Create
        </button>
      </form>
    </div>
  );
}

export default NoteCreate;
