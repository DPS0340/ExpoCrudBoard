import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    responseData: {},
    isLoading: true,
    isSuccess: false,
    error: null,
    reset: false,
  },
  reducers: {
    getComments: (state, { payload }) => {
      console.log("게시판 목록 조회 액션 호출 - getComments");
    },
    reset: (state) => {
      return {
        ...state,
        reset: true,
      };
    },
    getCommentsAsync: (state, { payload: data }) => {
      console.log("saga에서 put 액션 호출 - getCommentsAsync");
      return {
        ...state,
        comments: data,
        isSuccess: true,
        isLoading: false,
      };
    },
    getCommentsFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 - getRoomsFailedAsync");
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    },
    deleteComment: (state, { payload: data }) => {
      console.log("댓글 삭제 액션 호출 - deleteComment");
    },
    deleteCommentAsync: (state, { payload: data }) => {
      console.log("saga에서 댓글 삭제 액션 호출 - deleteCommentAsync");
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    },
    deleteCommentFailedAsync: (state, { payload: data }) => {
      console.log("saga에서 댓글 삭제 액션 호출 - deleteCommentFailedAsync");
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
      };
    },
    deleteReComment: (state, { payload: data }) => {
      console.log("대댓글 삭제 액션 호출 - deleteReComment");
    },
    deleteReCommentAsync: (state, { payload: data }) => {
      console.log("saga에서 대댓글 삭제 액션 호출 - deleteReCommentAsync");
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    },
    deleteReCommentFailedAsync: (state, { payload: data }) => {
      console.log(
        "saga에서 대댓글 삭제 액션 호출 - deleteReCommentFailedAsync"
      );
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
      };
    },
  },
});

export const commentsReducers = commentsSlice.reducer;
export const commentsActions = commentsSlice.actions;
