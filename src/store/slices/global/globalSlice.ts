/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  apiGetAccountCategory,
  apiGetAddreshData,
  apiGetBusinessType,
  apiGetCurrancy,
  apiGetDayTerms,
  apiGetDeliveryType,
} from "@/services/masterServicec";

export const SLICE_NAME = "global";

export const GetCurrancy = createAsyncThunk(
  SLICE_NAME + "Currancy",
  async () => {
    const response = await apiGetCurrancy();
    return response?.data;
  },
);
export const getDeliveryType = createAsyncThunk(
  SLICE_NAME + "DeliveryType",
  async () => {
    const response = await apiGetDeliveryType();
    return response?.data;
  },
);
export const getDayTerms = createAsyncThunk(
  SLICE_NAME + "DayTerms",
  async () => {
    const response = await apiGetDayTerms();
    return response?.data;
  },
);
export const getAllCategory = createAsyncThunk(
  SLICE_NAME + "categryType",
  async () => {
    const response = await apiGetAccountCategory();
    return response?.data;
  },
);
export const getAllBusinessType = createAsyncThunk(
  SLICE_NAME + "BusinessType",
  async () => {
    const response = await apiGetBusinessType();
    return response?.data;
  },
);

export type GlobalState = {
  currancy: any;
  deliveryType: any;
  dayTerms: any;
  categoryList: any;
  businessList: any;
};

const initialState: GlobalState = {
  currancy: [],
  deliveryType: [],
  dayTerms: [],
  categoryList: [],
  businessList: [],
};

const GlobalSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setBasicDetailCompanyNamecurrancy: (state, action) => {
      state.currancy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetCurrancy.fulfilled, (state: any, action: any) => {
        state.currancy = action.payload.data;
      })
      .addCase(getDeliveryType.fulfilled, (state: any, action: any) => {
        state.deliveryType = action.payload.data;
      })
      .addCase(getDayTerms.fulfilled, (state: any, action: any) => {
        state.dayTerms = action.payload.data;
      })
      .addCase(getAllCategory.fulfilled, (state: any, action: any) => {
        state.categoryList = action.payload.data;
      })
      .addCase(getAllBusinessType.fulfilled, (state: any, action: any) => {
        state.businessList = action.payload.data;
      });

    // ... other cases ...
  },
});

export const { setBasicDetailCompanyNamecurrancy } = GlobalSlice.actions;

export default GlobalSlice.reducer;
