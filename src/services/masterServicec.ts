/** @format */

import ApiService from "./ApiService";

export async function apiGetAccountData(id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/accounts/${id}`,
    method: "get",
  });
}
export async function apiGetMasterData() {
  return ApiService.fetchData({
    url: `admin/v1/masters/get-all`,
    method: "get",
  });
}
export async function apiGetStockData() {
  return ApiService.fetchData({
    url: `admin/v1/stocks`,
    method: "get",
  });
}

export async function apiGetAddreshData<T, U extends Record<any, unknown>>(
  masterName: U,
) {
  const data = {
    data: { masterName: masterName.masterName },
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiAddReferenceDetailsData(payload: any) {
  const data = {
    data: payload,
  };
  return ApiService.fetchData({
    url: `/admin/v1/referenceDetails`,
    method: "post",
    data,
  });
}
export async function apiEditReferenceDetailsData(payload: any, id: any) {
  const data = {
    data: payload,
  };
  return ApiService.fetchData({
    url: `/admin/v1/referenceDetails/${id}`,
    method: "put",
    data,
  });
}
export async function apiGetAddressType() {
  const data = {
    data: { masterName: "ADDRESS TYPE" },
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiGetRole() {
  const data = {
    data: { masterName: "ROLE" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiGetLocation() {
  const data = {
    data: { masterName: "LOCATION" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}

export async function apiGetDocumentype() {
  const data = {
    data: { masterName: "DOCUMENT TYPE" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiGetLab() {
  const data = {
    data: { masterName: "LAB" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiGetStatus() {
  const data = {
    data: { masterName: "STATUS" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiGetCurrancy() {
  const data = {
    data: { masterName: "CURRENCY" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiGetDeliveryType() {
  const data = {
    data: { masterName: "DELIVERY TYPE" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiGetDayTerms() {
  const data = {
    data: { masterName: "DAY TERMS" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiGetAccountCategory() {
  const data = {
    data: { masterName: "ACCOUNT CATEGORY" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
export async function apiGetBusinessType() {
  const data = {
    data: { masterName: "BUSINESS TYPE" }, // Adjust this line based on the actual structure of masterName in your API call
  };
  return ApiService.fetchData({
    url: `admin/v1/masters/sub-list`,
    method: "post",
    data,
  });
}
