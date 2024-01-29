/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const SLICE_NAME = "stock";

export type MasterState = {
  loading: boolean;
  mastersList: any;
  stockList: any;
};

const initialState: MasterState = {
  loading: false,
  mastersList: [],
  stockList: [],
};

const masterSlice = createSlice({
  name: `${SLICE_NAME}/master`,
  initialState,
  reducers: {
    setMaster: (state, action) => {
      state.mastersList = action.payload;
    },
    setStockList: (state, action) => {
      state.stockList = action.payload;
    },
  },
});

export const { setMaster, setStockList } = masterSlice.actions;

export default masterSlice.reducer;
