import { createSlice } from "@reduxjs/toolkit";

const ahSlice = createSlice({
  name: "ah",
  initialState: { accountHolder: null },
  reducers: {
    setAccountHolder(state, action) {
      state.accountHolder = action.payload;
    },
    updateAccountHolderOnTail(state, action) {
      const post = state.accountHolder.posts.find(
        (p) => p.id === action.payload.post.id
      );
      const updatedPost = {
        ...post,
        confidence: action.payload.post.confidence,
        tails: [...post.tails, action.payload.tail],
      };
      const filteredPosts = state.accountHolder.posts.filter(
        (p) => p.id !== updatedPost.id
      );
      const updatedPosts = [...filteredPosts, updatedPost];
      const sortedPosts = updatedPosts.sort((a, b) => a.id - b.id);
      const updatedAH = { ...state.accountHolder, posts: sortedPosts };
      state.accountHolder = updatedAH;
    },
    updateAccountHolderOnUnTail(state, action) {
      const untailPost = state.accountHolder.posts.find(
        (p) => p.id === action.payload.tail.post_id
      );
      const filtered = untailPost.tails.filter(
        (l) => l.id !== action.payload.tail.id
      );
      const updatedPost = {
        ...untailPost,
        confidence: action.payload.post.confidence,
        tails: filtered,
      };
      const filteredPosts = state.accountHolder.posts.filter(
        (p) => p.id !== untailPost.id
      );
      const updatedPosts = [...filteredPosts, updatedPost];
      const sortedPosts = updatedPosts.sort((a, b) => b.id - a.id);
      const updatedAH = { ...state.accountHolder, posts: sortedPosts };
      state.accountHolder = updatedAH;
    },
    updateAccountHolderOnFade(state, action) {
      const post = state.accountHolder.posts.find(
        (p) => p.id === action.payload.post.id
      );
      const updatedPost = {
        ...post,
        confidence: action.payload.post.confidence,
        fades: [...post.fades, action.payload.fade],
      };
      const filteredPosts = state.accountHolder.posts.filter(
        (p) => p.id !== updatedPost.id
      );
      const updatedPosts = [...filteredPosts, updatedPost];
      const sortedPosts = updatedPosts.sort((a, b) => a.id - b.id);
      const updatedAH = { ...state.accountHolder, posts: sortedPosts };
      state.accountHolder = updatedAH;
    },

    updateAccountHolderOnUnFade(state, action) {
      const unfadePost = state.accountHolder.posts.find(
        (p) => p.id === action.payload.fade.post_id
      );
      const filtered = unfadePost.fades.filter(
        (l) => l.id !== action.payload.fade.id
      );
      const updatedPost = {
        ...unfadePost,
        confidence: action.payload.post.confidence,
        fades: filtered,
      };
      const filteredPosts = state.accountHolder.posts.filter(
        (p) => p.id !== unfadePost.id
      );
      const updatedPosts = [...filteredPosts, updatedPost];
      const sortedPosts = updatedPosts.sort((a, b) => b.id - a.id);
      const updatedAH = { ...state.accountHolder, posts: sortedPosts };
      state.accountHolder = updatedAH;
    },

    updateAccountHolderOnComment(state, action) {
      const likedPost = state.accountHolder.posts.find(
        (p) => p.id === action.payload.post_id
      );
      if (likedPost) {
        const updatedComments = [...likedPost.comments, action.payload];
        const updatedPost = { ...likedPost, comments: updatedComments };
        const filteredPosts = state.accountHolder.posts.filter(
          (p) => p.id !== action.payload.post_id
        );
        const updatedPosts = [...filteredPosts, updatedPost];
        const sorted = updatedPosts.sort((a, b) => b.id - a.id);
        const updatedAH = { ...state.accountHolder, posts: sorted };
        state.accountHolder = updatedAH;
      }
    },

    updateAccountHolderOnDeleteComment(state, action) {
      const post = state.accountHolder.posts.find(
        (p) => p.id === action.payload.post_id
      );
      if (post) {
        const filtered = post.comments.filter(
          (l) => l.id !== action.payload.id
        );
        const updatedPost = { ...post, comments: filtered };
        const filteredPosts = state.accountHolder.posts.filter(
          (p) => p.id !== post.id
        );
        const updatedPosts = [...filteredPosts, updatedPost];
        const sorted = updatedPosts.sort((a, b) => a.id - b.id);
        const updatedAH = { ...state.accountHolder, posts: sorted };
        state.accountHolder = updatedAH;
      }
    },
    updatePostsOnGrade(state, action) {
      const filtered = [...state.accountHolder.posts].filter(
        (p) => p.id !== action.payload.id
      );
      const updatedPosts = [...filtered, action.payload];
      state.accountHolder.posts = updatedPosts;
    },

    deletePosts(state, action) {
      const filtered = state.accountHolder.posts.filter(
        (p) => p.id !== action.payload
      );
      state.accountHolder.posts = filtered;
    },
  },
});

export const ahActions = ahSlice.actions;

export default ahSlice;
