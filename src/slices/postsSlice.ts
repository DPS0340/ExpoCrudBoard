import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  responseData: [],
  isLoading: false,
  isSuccess: false,
  error: null,
  reset: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetStatus: (state) => {
      return {
        ...initialState,
        posts: state.posts,
      };
    },
    reset: (state) => {
      return {
        ...state,
        reset: true,
      };
    },
    loading: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
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
        reset: false,
      };
    },
    getPostsFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 get 액션 호출 실패 - getPostsFailedAsync");
      return {
        ...state,
        isLoading: false,
        error: error,
        reset: false,
      };
    },
    writePost: (state, { payload }) => {
      console.log("글 작성 액션 호출 - writePost");
    },
    writePostAsync: (state, { payload: data }) => {
      console.log("saga에서 put 액션 호출 - writePostAsync");
      return {
        ...state,
        posts: data,
        isSuccess: true,
        isLoading: false,
      };
    },
    writePostFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 실패 - writePostFailedAsync");
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    },
    changePost: (state, { payload }) => {
      console.log("글 수정 액션 호출 - changePost");
    },
    changePostAsync: (state, { payload: data }) => {
      console.log("saga에서 put 액션 호출 - changePostAsync");
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    },
    changePostFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 실패 - changePostFailedAsync");
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        error: error,
      };
    },
    deletePost: (state, { payload }) => {
      console.log("글 작성 액션 호출 - deletePost");
    },
    deletePostAsync: (state, { payload: data }) => {
      console.log("saga에서 put 액션 호출 - deletePostAsync");
      return {
        ...state,
        responseData: data,
        isSuccess: true,
        isLoading: false,
      };
    },
    deletePostFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 실패 - deletePostFailedAsync");
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
