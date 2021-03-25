import { createSlice } from "@reduxjs/toolkit";

export const changeEditSlice = createSlice({
  name: "changeEdit",
  initialState: {
    isChange: false,
  },
  reducers: {
    toggle: (state) => {
      return {
        isChange: !state.isChange,
      };
    },
    on: (state) => {
      return {
        isChange: true,
      };
    },
    off: (state) => {
      return {
        isChange: false,
      };
    },
  },
});

export const changeEditReducers = changeEditSlice.reducer;
export const changeEditActions = changeEditSlice.actions;
