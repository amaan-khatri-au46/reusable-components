/** @format */

import ApiService from "./ApiService";

export async function apiGetMasterData<T>() {
  return ApiService.fetchData<T>({
    url: "/masters",
    method: "get",
  });
}
