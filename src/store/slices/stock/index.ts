/** @format */

import { combineReducers } from "@reduxjs/toolkit";

import master, { MasterState } from "./masterSlice";

const reducer = combineReducers({
  master,
});

export type StockState = {
  master: MasterState;
};

export * from "./masterSlice";

export default reducer;
