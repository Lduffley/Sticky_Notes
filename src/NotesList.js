import React from "react";
import Note from "./Note.js";

let keepSearchMatches = note => note.doesMatchSearch;

let NotesList = props => {
  let renderNote = note => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      remove={props.remove}
    />
  );

  let searchMatches = props.notes.filter(keepSearchMatches);
  let noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
