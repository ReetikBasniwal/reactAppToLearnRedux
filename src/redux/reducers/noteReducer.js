import { createSlice } from "@reduxjs/toolkit";
// import { actions } from "./todoReducer";
// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteAction";

const initialState = {
  notes: [
    {
      text: "Coding in morning is very important, You complete every task that you decided to complete to get the Job not a Job, you have to get a good JOB",
      createdOn: new Date().toISOString().split('T')[0],
    },
    {
      text: "Go to gym at evening or morning but exercise is very important, this body is given to us by lord and our duty to keep this working",
      createdOn: new Date().toISOString().split('T')[0],
    },
  ],
};

const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    // this is ADD NOTE ACTION
    addNote: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date().toISOString().split('T')[0],
      });
    },

    // this is DELETE NOTE ACTION
    deleteNote: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const noteReducer = noteSlice.reducer;

export const noteActions = noteSlice.actions;

export const noteSelector = (state) => state.noteReducer.notes;


// export function noteReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [
//           ...state.notes,
//           {
//             text: action.text,
//             createdOn: new Date(),
//           },
//         ],
//       };
//     case DELETE_NOTE:
//       state.notes.splice(action.index, 1);
//       return {
//         ...state,
//         notes: [...state.notes]
//       };
//     default:
//       return state;
//   }
// }
