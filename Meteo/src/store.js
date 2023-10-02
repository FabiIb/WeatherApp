import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./Slices";
export const store = configureStore({
  reducer: {
    store: cityReducer,
  },
});
