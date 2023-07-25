import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addNote } from "../../redux/actions/noteAction";
import { noteActions } from "../../redux/reducers/noteReducer";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notificationReducer";

import styles from './NoteForm.module.css';

function NoteForm() {
  const dispatch = useDispatch();
  const [NoteText, setNoteText] = useState("");
  const message = useSelector(notificationSelector);


  if (message) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 1500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(noteActions.addNote(NoteText));
    setNoteText("");
  };

  return (
    <div className={styles.noteContainer}>
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form className="mb-3" onSubmit={handleSubmit}>
        <textarea
          rows={9}
          type="text"
          className="form-control mb-3"
          value={NoteText}
          onChange={(e) => setNoteText(e.target.value)}
          style={{ resize: "none" }}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
