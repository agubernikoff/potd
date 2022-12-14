import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, users: [], searchResults: [] },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    logOut(state, action) {
      state.user = null;
    },
    updateUserOnTail(state, action) {
      const tail = action.payload;
      const updatedTails = [...state.user.tails, tail];
      const updatedUser = { ...state.user, tails: updatedTails };
      state.user = updatedUser;
    },
    updateUserOnUntail(state, action) {
      const untailID = action.payload;
      const filtered = state.user.tails.filter((uL) => uL.id !== untailID);
      const updatedUser = { ...state.user, tails: filtered };
      state.user = updatedUser;
    },
    updateUserOnFade(state, action) {
      const fade = action.payload;
      const updatedFades = [...state.user.fades, fade];
      const updatedUser = { ...state.user, fades: updatedFades };
      state.user = updatedUser;
    },
    updateUserOnUnfade(state, action) {
      const unfadeID = action.payload;
      const filtered = state.user.fades.filter((uL) => uL.id !== unfadeID);
      const updatedUser = { ...state.user, fades: filtered };
      state.user = updatedUser;
    },
    setSearchResults(state, action) {
      const searchText = action.payload;
      const filtered = state.users.filter((u) =>
        u.username.toUpperCase().includes(searchText.toUpperCase())
      );
      if (!searchText) state.searchResults = [];
      else state.searchResults = filtered;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
