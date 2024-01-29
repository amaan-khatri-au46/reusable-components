/** @format */

import ApiService from "./ApiService";

export async function apiGetProjectDashboardData<T>() {
  return ApiService.fetchData<T>({
    url: "/project/dashboard",
    method: "get",
  });
}

export async function apiGetProjectList<T, U extends Record<string, unknown>>(
  data: U,
) {
  return ApiService.fetchData<T>({
    url: "/project/list",
    method: "post",
    data,
  });
}

export async function apiPutProjectList<T, U extends Record<string, unknown>>(
  data: U,
) {
  return ApiService.fetchData<T>({
    url: "/project/list/add",
    method: "put",
    data,
  });
}

export async function apiGetScrumBoards<T>() {
  return ApiService.fetchData<T>({
    url: "/project/scrum-board/boards",
    method: "post",
  });
}

export async function apiGetScrumBoardtMembers<T>() {
  return ApiService.fetchData<T>({
    url: "/project/scrum-board/members",
    method: "post",
  });
}

export async function apiGetScrumBoardtTicketDetail<T>() {
  return ApiService.fetchData<T>({
    url: "/project/scrum-board/tickets/detail",
    method: "get",
  });
}

export async function apiGetSubMasterData<T>(
  mastersId: string,
  pageIndex: number,
  pageSize: number,
) {
  const queryParams = `?pageIndex=${pageIndex}&pageSize=${pageSize}`;
  return ApiService.fetchData<T>({
    url: `/admin/v1/masters/${mastersId}${queryParams}`,
    method: "get",
  });
}

export async function apiGetMasterData<T>() {
  return ApiService.fetchData<T>({
    url: "/admin/v1/masters",
    method: "get",
  });
}

export async function apiEditSubMaster<T, U extends Record<string, unknown>>(
  id: string,
  payload: U,
) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/masters/${id}`,
    method: "put",
    data: payload,
  });
}

export async function apiAddMasterList<T, U extends Record<string, unknown>>(
  payload: U,
) {
  return ApiService.fetchData<T>({
    url: "/admin/v1/masters",
    method: "post",
    data: payload,
  });
}

export async function apiDeleteSubMaster<T>(id: string) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/masters/${id}`,
    method: "delete",
  });
}

export async function apiEditBulkSubMaster<T>(data: any[]) {
  const dataObject: any = { data }; // Wrap payload inside 'data' key
  return ApiService.fetchData<T>({
    url: `admin/v1/masters/bulkSubMasterUpdate`,
    method: "put",
    data: dataObject,
  });
}

export async function apiFetchSubMasterBySearch<T>(
  id: string,
  name: string,
  pageIndex: number,
  pageSize: number
) {
  const queryString = `?pageIndex=${pageIndex}&pageSize=${pageSize}`;
  return ApiService.fetchData<T>({
    url: `/admin/v1/masters/search/${id}${queryString}`,
    method: "post",
    data: { data: { name: name } },
  });
}
