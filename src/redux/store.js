// import { createStore } from "redux";
// import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// });

export const store = configureStore({
    reducer: {
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware: [loggerMiddleware]
})