import ApiService from "./ApiService";

export async function apiFileUpload<T, U extends Record<string, unknown>>(
    payload: U,
) {
    return ApiService.fetchData<T>({
        url: "/admin/v1/masters",
        method: "post",
        data: payload,
    });
}