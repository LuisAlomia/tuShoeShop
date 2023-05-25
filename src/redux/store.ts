import { configureStore } from "@reduxjs/toolkit";
import filter from "./feactures/filterSlice";
import search from "./feactures/searchSlice";

export const store = configureStore({
  reducer: {
    filter,
    search,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
