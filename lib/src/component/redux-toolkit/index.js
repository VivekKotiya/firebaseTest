import { createSlice, configureStore } from "@reduxjs/toolkit";

const songs = createSlice({
  name: "song",
  initialState: ["See you again"],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songs.reducer,
  },
});

export default store;
export const { addSong } = songs.actions;
