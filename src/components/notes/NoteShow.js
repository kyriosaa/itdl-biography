import { useState } from "react";
import NoteEdit from "./NoteEdit";

function NoteShow({ note, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(note.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{note.title}</h3>;
  if (showEdit) {
    content = <NoteEdit onSubmit={handleSubmit} note={note} />;
  }

  return (
    <div className="major">
      <div className="content">{content}</div>
      <div className="actions">
        <button
          className="button small"
          onClick={handleEditClick}
          style={{ marginRight: 10 }}
        >
          Edit
        </button>
        <button className="button small" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <br />
    </div>
  );
}

export default NoteShow;
