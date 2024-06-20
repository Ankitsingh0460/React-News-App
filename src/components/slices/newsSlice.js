import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: { category: null },
  reducers: {
    setNews: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default newsSlice.reducer;
export const { setNews } = newsSlice.actions;
