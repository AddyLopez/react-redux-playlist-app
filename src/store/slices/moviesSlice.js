import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

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
    // first argument below is the the action creator
    builder.addCase(reset, (state, action) => {
      return []; // updates state to an empty array. Immer expects the state object to be mutated in particular ways, so simply reassigning state to an empty array wouldn't work.
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions; // variables (action creator functions, here) need to be destructured from actions object
export const moviesReducer = moviesSlice.reducer; // direct reference needs no destructuring
