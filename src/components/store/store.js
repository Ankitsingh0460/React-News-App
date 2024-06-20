import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "../slices/newsSlice";
const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
