/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SLICE_BASE_NAME } from "./constants";

export type CommonState = {
  currentRouteKey: string;
  currancy: any;
};

export const initialState: CommonState = {
  currentRouteKey: "",
  currancy: [],
};

export const commonSlice = createSlice({
  name: `${SLICE_BASE_NAME}/common`,
  initialState,
  reducers: {
    setCurrentRouteKey: (state, action: PayloadAction<string>) => {
      state.currentRouteKey = action.payload;
    },
  },
});

export const { setCurrentRouteKey } = commonSlice.actions;

export default commonSlice.reducer;
