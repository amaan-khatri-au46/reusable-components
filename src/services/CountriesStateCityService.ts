/** @format */

import ApiService from "./ApiService";

export async function apiGetCountry<T>() {
  return ApiService.fetchData<T>({
    url: "/admin/v1/countries",
    method: "get",
  });
}

export async function apiGetCities<T>(payload: any) {
  return ApiService.fetchData<T>({
    url: "/admin/v1/cities",
    method: "post",
    data: payload,
  });
}
export async function apiGetState<T>(CountryId: any) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/states/${CountryId}`,
    method: "get",
  });
}
export async function apiGetCity<T>(data: any) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/cities`,
    method: "post",
    data: data,
  });
}
