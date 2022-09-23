import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [] },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    updatePosts(state, action) {
      const newPost = action.payload;
      const updatedPosts = [newPost, ...state.posts];
      state.posts = updatedPosts;
    },

    updatePostsOnGrade(state, action) {
      const post = [...state.posts].find((p) => p.id === action.payload.id);
      const filtered = state.posts.filter((p) => p.id !== action.payload.id);
      const updated = {
        ...post,
        status: action.payload.status,
        result: action.payload.result,
      };
      const updatedPosts = [...filtered, action.payload];
      state.posts = updatedPosts;
    },

    deletePosts(state, action) {
      const filtered = state.posts.filter((p) => p.id !== action.payload);
      state.posts = filtered;
    },

    updatePostOnTail(state, action) {
      const oldPost = state.posts.find((p) => p.id === action.payload.post.id);
      const updatedTails = [...oldPost.tails, action.payload.tail];
      const filteredPosts = state.posts.filter(
        (p) => p.id !== action.payload.post.id
      );
      const updatedPost = {
        ...oldPost,
        confidence: action.payload.post.confidence,
        tails: updatedTails,
      };
      const updatedPosts = [...filteredPosts, updatedPost];
      state.posts = updatedPosts;
    },

    updatePostUntail(state, action) {
      const untailPost = state.posts.find(
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
      const filteredPosts = state.posts.filter((p) => p.id !== untailPost.id);
      const updatedPosts = [...filteredPosts, updatedPost];
      state.posts = updatedPosts;
    },

    updatePostFade(state, action) {
      const fadedPost = state.posts.find(
        (p) => p.id === action.payload.fade.post_id
      );
      const updatedfades = [...fadedPost.fades, action.payload.fade];
      const updatedPost = {
        ...fadedPost,
        confidence: action.payload.post.confidence,
        fades: updatedfades,
      };
      const filteredPosts = state.posts.filter(
        (p) => p.id !== action.payload.fade.post_id
      );
      const updatedPosts = [...filteredPosts, updatedPost];
      state.posts = updatedPosts;
    },

    updatePostFadesOnUnfade(state, action) {
      const unfadePost = state.posts.find(
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
      const filteredPosts = state.posts.filter((p) => p.id !== unfadePost.id);
      const updatedPosts = [...filteredPosts, updatedPost];
      state.posts = updatedPosts;
    },

    updatePostCommentsOnComment(state, action) {
      const likedPost = state.posts.find(
        (p) => p.id === action.payload.post_id
      );
      if (likedPost) {
        const updatedComments = [...likedPost.comments, action.payload];
        const updatedPost = { ...likedPost, comments: updatedComments };
        const filteredPosts = state.posts.filter(
          (p) => p.id !== action.payload.post_id
        );
        const updatedPosts = [...filteredPosts, updatedPost];
        const sorted = updatedPosts.sort((a, b) => a.id - b.id);
        state.posts = sorted;
      }
    },

    updatePostCommentsOnDelete(state, action) {
      const post = state.posts.find((p) => p.id === action.payload.post_id);
      if (post) {
        const filtered = post.comments.filter(
          (l) => l.id !== action.payload.id
        );
        const updatedPost = { ...post, comments: filtered };
        const filteredPosts = state.posts.filter((p) => p.id !== post.id);
        const updatedPosts = [...filteredPosts, updatedPost];
        const sorted = updatedPosts.sort((a, b) => a.id - b.id);
        state.posts = sorted;
      }
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice;
