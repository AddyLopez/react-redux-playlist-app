import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    // state parameter represents the movie state, NOT the entire app's state
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      // action.payload should be a string. It represents the movie to remove
      // Redux Toolkit uses Immer, so mutating state here is permitted
      const index = state.indexOf(action.payload); // get index of movie to remove (represented by action.payload) from state array
      state.splice(index, 1); // remove 1 element at index from state array (note that it is splice not slice)
    },
  },
  extraReducers(builder) {
    // when slice is created by Redux Toolkit, this extraReducers function will be called automatically. builder is how you watch for extra action types.
    // first argument below refactors the action creator to avert typos
    builder.addCase(songsSlice.actions.reset, (state, action) => {
      return []; // state is an empty array. Immer expects the state object to be mutated in particular ways, so simply reassigning state to an empty array wouldn't work.
    });
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
      state.splice(index, 1); // remove 1 element at index from state array (note that it is splice not slice)
    },
    reset(state, action) {
      // goal: reset both playlists
      // a problem: Immer detects mutations to state but would not detect a simple reassignment of state to an empty array.
      return []; // solution: Redux Toolkit interprets the empty array as state.
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// console.log(store.getState());

// console.log(songsSlice.actions.addSong());
export { store };
export const { addSong, removeSong, reset } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
