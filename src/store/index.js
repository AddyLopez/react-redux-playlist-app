import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      //
    },
    removeMovie(state, action) {
      //
    },
  },
});

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // state parameter represents the song state, NOT the entire app's state
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload should be a string. It represents the song to remove
      // Redux Toolkit uses Immer, so mutating state here is permitted
      const index = state.indexOf(action.payload); // get index of song to remove (represented by action.payload) from state array
      state.splice(index, 1); // remove 1 element at index from state array
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

console.log(store.getState());

// console.log(songsSlice.actions.addSong());
export { store };
export const { addSong, removeSong } = songsSlice.actions;
