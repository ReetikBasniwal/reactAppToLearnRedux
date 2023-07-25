import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Routes, Route } from "react-router-dom";

import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="" element={<Home />} />

          <Route
            path="/todo"
            element={
              <>
                <NavBar />
                <h1>To Dos</h1>
                <TodoForm />
                <TodoList />
              </>
            }
          />

          <Route
            path="/notes"
            element={
              <>
                <NavBar />
                <h1>Notes</h1>
                <NoteForm />
                <NoteList />
              </>
            }
          />

        </Routes>
      </Provider>
    </div>
  );
}

export default App;
