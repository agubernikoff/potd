import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import ahSlice from "./ah-slice";
import postsSlice from "./posts-slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    ah: ahSlice.reducer,
    posts: postsSlice.reducer,
  },
});

export default store;
