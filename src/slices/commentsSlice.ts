import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isLoading: true,
    isSuccess: false,
    error: null,
  },
  reducers: {
    getComments: (state, { payload }) => {
      console.log("게시판 목록 조회 액션 호출 - getComments");
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
  },
});

export const commentsReducers = commentsSlice.reducer;
export const commentsActions = commentsSlice.actions;
