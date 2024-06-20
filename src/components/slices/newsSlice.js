import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    setNews: (state, action) => {
      state.category = action.payload;
      console.log(state.category);
    },
  },
});

export default newsSlice.reducer;
export const { setNews } = newsSlice.actions;
