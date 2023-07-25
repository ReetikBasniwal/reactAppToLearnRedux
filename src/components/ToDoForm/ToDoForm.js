import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";
import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <div className="container">

      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Add to do here.."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end"  type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
