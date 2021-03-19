import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    error: null,
  },
  reducers: {
    login: (state, { payload: { data, navigation } }) => {
      console.log("로그인 액션 호출 - getBoards");
      console.log(data);
    },
    loginAsync: (state, { payload: data }) => {
      console.log("saga에서 login 액션 호출 - loginAsync");
      console.log(data);
      return {
        ...state,
        isLogin: true,
      };
    },
    loginFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 login 액션 실패 - loginFailedAsync");
      return {
        ...state,
        isLogin: false,
        error: error,
      };
    },
  },
});

export const loginReducers = loginSlice.reducer;
export const loginActions = loginSlice.actions;
