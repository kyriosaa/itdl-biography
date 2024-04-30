import { useState } from "react";

function BookCreate({ onCreate }) {
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
        <input className="input" value={title} onChange={handleChange} />
        <br />
        <br />
        <button className="button small">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
