import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { todoActions } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
import "./ToDoList.css";
import axios from "axios";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch("http://localhost:4100/api/todos")
    //   .then(res => res.json())
    //   .then(parsedJson => {
    //     console.log(parsedJson);
    //   })
    //   .catch((error) => {
    //     console.error("Fetch error:", error);
    //   });
    axios.get("http://localhost:4100/api/todos").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li className="TodoLi" key={`todo-id-${index}`}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(todoActions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
