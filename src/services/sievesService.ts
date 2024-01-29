import ApiService from "./ApiService";

export async function apiGetSievesData<T>(
    pageIndex: number,
    pageSize: number,
) {
    const queryParams = `?pageIndex=${pageIndex}&pageSize=${pageSize}`;
    return ApiService.fetchData<T>({
        url: `/admin/v1/sieves${queryParams}`,
        method: "get",
    });
}

export async function apiEditSievesData<T, U extends Record<string, unknown>>(
  id: string,
  payload: U,
) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/sieves/${id}`,
    method: "put",
    data: payload,
  });
}

export async function apiAddSievesList<T, U extends Record<string, unknown>>(
    data: U,
  ) {
    return ApiService.fetchData<T>({
      url: "/admin/v1/sieves",
      method: "post",
      data: data,
    });
  }

export async function apiDeleteSieves<T>(id: string) {
    return ApiService.fetchData<T>({
      url: `/admin/v1/sieves/${id}`,
      method: "delete",
    });
  }

  export async function apiEditBulkSieves<T>(data: any[]) {
    const dataObject: any = { data };
    return ApiService.fetchData<T>({
        url: `admin/v1/sieves/bulk-update`,
        method: "put",
        data: dataObject,
    });
}