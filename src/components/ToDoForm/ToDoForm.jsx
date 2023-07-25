import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions/todoActions";
import { todoActions } from "../../redux/reducers/todoReducer";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notificationReducer";

import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if (message) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 1500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoActions.add(todoText));
    setTodoText("");
  };

  return (
    <div className="container">
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Add to do here.."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
