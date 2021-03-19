import { createSlice } from "@reduxjs/toolkit";

export const boardsSlice = createSlice({
  name: "boards",
  initialState: {
    boards: [],
    isLoading: true,
    isSuccess: false,
    error: null,
  },
  reducers: {
    getBoards: (state, { payload }) => {
      console.log("게시판 목록 조회 액션 호출 - getBoards");
    },
    getBoardsAsync: (state, { payload: data }) => {
      console.log("saga에서 put 액션 호출 - getBoardsAsync");
      console.log();
      return {
        ...state,
        boards: data,
        isSuccess: true,
        isLoading: false,
      };
    },
    getBoardsFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 put 액션 호출 - getRoomsFailedAsync");
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    },
  },
});

export const boardsReducers = boardsSlice.reducer;
export const boardsActions = boardsSlice.actions;
