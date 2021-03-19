import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: true,
    isSuccess: false,
    error: null,
  },
  reducers: {
    getPosts: (state, { payload }) => {
      console.log("글 목록 조회 액션 호출 - getPosts");
    },
    getPostsAsync: (state, { payload: data }) => {
      console.log("saga에서 get 액션 호출 - getPostsAsync");
      return {
        ...state,
        posts: data,
        isSuccess: true,
        isLoading: false,
      };
    },
    getPostsFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 get 액션 호출 실패 - getPostsFailedAsync");
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    },
  },
});

export const postsReducers = postsSlice.reducer;
export const postsActions = postsSlice.actions;
