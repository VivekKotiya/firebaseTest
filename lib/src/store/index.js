import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songs";
import { moviesReducer, addMovie, removeMovie } from "./slices/movies";
import { bookReducer, addBook, removeBook } from "./slices/books";
import { resetSlice } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
    books: bookReducer,
  },
});

export {
  store,
  addMovie,
  addSong,
  removeMovie,
  removeSong,
  resetSlice,
  addBook,
  removeBook,
};
