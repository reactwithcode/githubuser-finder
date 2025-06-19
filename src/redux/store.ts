import { configureStore } from "@reduxjs/toolkit";
import { githubUserApiSlice } from "./githubUser/githubUserApiSlice";

export const store = configureStore({
  reducer: {
    [githubUserApiSlice.reducerPath]: githubUserApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubUserApiSlice.middleware),
});
