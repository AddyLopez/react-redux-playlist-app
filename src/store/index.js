import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // state parameter represents the song state, NOT the entire app's state
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

// console.log(songsSlice.actions.addSong());
export { store };
export const { addSong } = songsSlice.actions;
