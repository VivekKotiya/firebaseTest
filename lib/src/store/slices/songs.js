import { createSlice } from "@reduxjs/toolkit";
import { resetSlice } from "../actions";

const songs = createSlice({
  name: "songs",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
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

export const { addSong, removeSong } = songs.actions;
export const songsReducer = songs.reducer;
