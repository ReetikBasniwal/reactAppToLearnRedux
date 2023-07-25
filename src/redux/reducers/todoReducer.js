import { createSlice } from "@reduxjs/toolkit";
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [
    { text: "Coding in morning", completed: false },
    { text: "Go to gym at evening", completed: true },
  ],
};

// REDUCER  USING REDUX TOOLKIT

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // this is ADD ACTION
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    // this is TOGGLE ACTION
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;

// REDUCER USING REDUX

// export function todoReducer(state=initialState, action){
//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed: false
//                     }
//                 ]

//             }
//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos:  state.todos.map((todo, i) => {
//                     if(i === action.index){
//                         todo.completed = !todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }
