import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLogin: false,
    error: null,
  },
  reducers: {
    register: (state, { payload: { data, navigation } }) => {
      console.log("회원가입 액션 호출 - register");
      console.log(data);
      return state;
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
