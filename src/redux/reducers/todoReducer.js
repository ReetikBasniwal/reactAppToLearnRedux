import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [],
};

export const getInitialStateAsync = createAsyncThunk(
  "todo/getInitialState",
   async (arg, thunkAPI) => {
    //async calls
    try {
      const res = await axios.get("http://localhost:4100/api/todos")
        thunkAPI.dispatch(todoActions.setInitialState(res.data));
    }catch(error){
      console.error('Error: ', error);
    }
   }
)

// REDUCER  USING REDUX TOOLKIT

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.todos = [...action.payload]
    },
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

export const todoActions = todoSlice.actions;

export const todoSelector = (state) => state.todoReducer.todos;

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
