import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

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
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return []; // updates state to an empty array. Immer expects the state object to be mutated in particular ways, so simply reassigning state to an empty array wouldn't work.
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions; // variables (action creator functions, here) need to be destructured from actions object
export const songsReducer = songsSlice.reducer; // direct reference needs no destructuring
