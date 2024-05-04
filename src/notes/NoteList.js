import NoteShow from "./NoteShow";

function NoteList({ notes, onEdit, onDelete }) {
  const renderedNotes = notes.map((note) => {
    return (
      <NoteShow onEdit={onEdit} onDelete={onDelete} key={note.id} note={note} />
    );
  });

  return <div className="major">{renderedNotes}</div>;
}

export default NoteList;
