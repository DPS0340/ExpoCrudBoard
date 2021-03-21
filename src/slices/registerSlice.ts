import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    isRegister: false,
    error: null,
  },
  reducers: {
    register: (state, { payload: data }) => {
      console.log("회원가입 액션 호출 - register");
      console.log(data);
      return state;
    },
    registerAsync: (state, { payload: data }) => {
      console.log("saga에서 register 액션 호출 - registerAsync");
      console.log(data);
      return {
        ...state,
        isLogin: true,
      };
    },
    registerFailedAsync: (state, { payload: error }) => {
      console.log("saga에서 register 액션 실패 - registerFailedAsync");
      return {
        ...state,
        isLogin: false,
        error: error,
      };
    },
  },
});

export const registerReducers = registerSlice.reducer;
export const registerActions = registerSlice.actions;
