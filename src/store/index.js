import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

// this file is the central access point for everything related to Redux (to practice preventing circular imports)

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// console.log(store.getState());

export { store, reset, addMovie, removeMovie, addSong, removeSong };
