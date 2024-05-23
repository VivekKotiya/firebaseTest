import { createSlice } from "@reduxjs/toolkit";

const books = createSlice({
  name: "books",
  initialState: ["India"],
  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },
    removeBook(state, action) {
      const i = state.indexOf(action.payload);
      state.splice(i, 1);
    },
  },
});

export const bookReducer = books.reducer;
export const { addBook, removeBook } = books.actions;
