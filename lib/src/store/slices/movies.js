import { createSlice } from "@reduxjs/toolkit";
import { resetSlice } from "../actions";

const movies = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const i = state.indexOf(action.payload);
      state.splice(i, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(resetSlice, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = movies.actions;
export const moviesReducer = movies.reducer;
