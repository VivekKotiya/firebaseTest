import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songs";
import { moviesReducer, addMovie, removeMovie } from "./slices/movies";
import { resetSlice } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, addMovie, addSong, removeMovie, removeSong, resetSlice };
