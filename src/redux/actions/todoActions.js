// ACTION export constANTS
export const ADD_TODO = "ADD TODO";
export const TOGGLE_TODO = "TOGGLE TODO";

// ACTION Creators
export const addTodo = (text) => ({
  text,
  type: ADD_TODO,
});

export const toggleTodo = (index) => ({
    index,
    type: TOGGLE_TODO,
  });