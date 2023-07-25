import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { deleteNote } from "../../redux/actions/noteAction";

function NoteList() {
  const notes = useSelector((state) => state.noteReducer.notes);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li className='noteList' key={`note-id-${index}`}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={() =>  dispatch(deleteNote(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
