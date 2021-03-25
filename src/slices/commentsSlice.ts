import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    responseData: {},
    isLoading: true,
    isSuccess: false,
    error: null,
  },
  reducers: {
    getComments: (state, { payload }) => {
      console.log("댓글 목록 조회 액션 호출 - getComments");
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
    loading: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    getCommentsFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 - getRoomsFailedAsync");
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        error: error,
      };
    },
    writeComment: (state, { payload }) => {
      console.log("댓글 작성 액션 호출 - writeComment");
    },
    writeCommentAsync: (state, { payload: data }) => {
      console.log("saga에서 put 액션 호출 - writeCommentAsync");
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    },
    writeCommentFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 - writeCommentFailedAsync");
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: error,
      };
    },
    writeReComment: (state, { payload }) => {
      console.log("댓글 작성 액션 호출 - writeReComment");
    },
    writeReCommentAsync: (state, { payload: data }) => {
      console.log("saga에서 put 액션 호출 - writeReCommentAsync");
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    },
    writeReCommentFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 - writeReCommentFailedAsync");
      return {
        ...state,
        isSuccess: false,
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
    changeComment: (state, { payload }) => {
      console.log("댓글 수정 액션 호출 - changeComment");
    },
    changeCommentAsync: (state, { payload: data }) => {
      console.log("saga에서 put 액션 호출 - changeCommentAsync");
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    },
    changeCommentFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 실패 - changeCommentFailedAsync");
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        error: error,
      };
    },
    changeReComment: (state, { payload }) => {
      console.log("대댓글 수정 액션 호출 - changeReComment");
    },
    changeReCommentAsync: (state, { payload: data }) => {
      console.log("saga에서 put 액션 호출 - changeReCommentAsync");
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    },
    changeReCommentFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 실패 - changeReCommentFailedAsync");
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        error: error,
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
