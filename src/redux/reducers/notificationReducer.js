import { createSlice } from "@reduxjs/toolkit";
// import { actions } from "./todoReducer"
import { todoActions } from "./todoReducer";
import { noteActions } from "./noteReducer";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  // NOT A CORRECT WAY
  // extraReducers:{
  //     "todo/add":(state, action) => {
  //         state.message = "Todo is added"
  //     },
  //     "note/addNote":(state, action) => {
  //         state.message = "Note is added"
  //     }
  // }
  // -------------------------
  // CORRECT WAY
  extraReducers: (builder) => {
      builder.addCase(todoActions.add, (state, action) => {
          state.message = "Todo is created";
      });
      builder.addCase(noteActions.addNote, (state, action) => {
          state.message = "Note is created";
      })
  }
  // This is depricated
  // extraReducers: {
  //   [todoActions.add]: (state, action) => {
  //     state.message = "Todo is created";
  //   },
  //   [noteActions.addNote]: (state, action) => {
  //     state.message = "Note is created";
  //   },
  // },
});

export const notificationReducer = notificationSlice.reducer;

export const notificationSelector = (state) =>
  state.notificationReducer.message;

export const resetNotification = notificationSlice.actions.reset;
