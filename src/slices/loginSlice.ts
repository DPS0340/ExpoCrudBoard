import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: {},
    isLogin: false,
    error: null,
  },
  reducers: {
    login: (state, { payload: data }) => {
      console.log("로그인 액션 호출 - login");
      console.log(data);
    },
    checkLogin: (state) => {
      console.log("로그인 확인 액션 호출 - checkLogin");
    },
    checkLoginAsync: (state, { payload: data }) => {
      console.log("saga에서 로그인 확인 액션 호출 - checkLogin");
      return {
        ...state,
        isLogin: true,
        data,
      };
    },
    logout: (state) => {
      return {
        ...state,
        isLogin: false,
      };
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
