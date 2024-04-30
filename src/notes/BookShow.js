import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="major">
      <div className="content">{content}</div>
      <div className="actions">
        <button className="button small" onClick={handleEditClick}>
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

export default BookShow;
