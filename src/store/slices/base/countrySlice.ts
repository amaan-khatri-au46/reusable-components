/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { apiGetCountry } from "@/services/CountriesStateCityService";

import { SLICE_BASE_NAME } from "./constants";

export const addCountryList = createAsyncThunk<any, any>(
  SLICE_BASE_NAME + "getCounty",
  async () => {
    const response = await apiGetCountry();
    return response?.data;
  },
);
export type CountriesState = {
  country: any;
  countryTotal: string;
};

export const initialState: CountriesState = {
  country: [],
  countryTotal: "",
};

export const countrySlice = createSlice({
  name: `${SLICE_BASE_NAME}/country`,
  initialState,
  reducers: {
    setCountry: (state, action: any) => {
      state.country = action.payload.data.data;
      state.countryTotal = action.payload.total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCountryList.fulfilled, (state, action: any) => {
      state.country = action.payload.data;
    });
  },
});

export const { setCountry } = countrySlice.actions;

export default countrySlice.reducer;
