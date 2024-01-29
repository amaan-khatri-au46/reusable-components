/** @format */

import { combineReducers } from "@reduxjs/toolkit";

import global, { GlobalState } from "./globalSlice";

const reducer = combineReducers({
  global,
});

export type GlobalCommState = {
  global: GlobalState;
};

export * from "./globalSlice";

export default reducer;
