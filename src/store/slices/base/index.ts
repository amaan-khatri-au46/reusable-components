/** @format */

import { combineReducers } from "@reduxjs/toolkit";

import common, { CommonState } from "./commonSlice";
import country, { CountriesState } from "./countrySlice";

const reducer = combineReducers({
  common,
  country,
});

export type BaseState = {
  common: CommonState;
  country: CountriesState;
};

export * from "./commonSlice";

export default reducer;
