import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
// import { deleteNote } from "../../redux/actions/noteAction";
import { noteActions, noteSelector } from "../../redux/reducers/noteReducer";


function NoteList() {
  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li className='noteList' key={`note-id-${index}`}>
            <p>{note.createdOn}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={() =>  dispatch(noteActions.deleteNote(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
