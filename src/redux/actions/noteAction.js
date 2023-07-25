// ACTION export CONSTANTS
export const ADD_NOTE = "ADD NOTE";
export const DELETE_NOTE = "DELETE NOTE";

// ACTION Creators
export const addNote = (text) => ({
  text,
  type: ADD_NOTE,
});

export const deleteNote = (index) => ({
  index,
  type: DELETE_NOTE,
});
