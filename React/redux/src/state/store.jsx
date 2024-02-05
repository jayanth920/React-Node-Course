import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice"
import profileReducer from "./slices/profileSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    profile: profileReducer
  },
});
