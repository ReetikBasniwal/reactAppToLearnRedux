import { createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { combineReducers } from "redux";

const result = combineReducers({
    todoReducer,
    noteReducer
});

export const store = createStore(result);