/** @format */

import ApiService from "./ApiService";

export async function apiGetCategoryData<T>() {
  return ApiService.fetchData<T>({
    url: "admin/v1/category",
    method: "get",
  });
}

export async function apiGetAccountCompanyNameData(name: string | undefined) {
  return ApiService.fetchData({
    url: `/admin/v1/accounts/search?search=${name}`,
    method: "get",
  });
}
export async function getBrokerList<T>() {
  return ApiService.fetchData<T>({
    url: "/admin/v1/accounts/getBroker",
    method: "get",
  });
}

export async function apiGetCompanyNameData<T>() {
  return ApiService.fetchData<T>({
    url: "admin/v1/category",
    method: "get",
  });
}

export async function apiGetPartyCodeData<T>() {
  return ApiService.fetchData<T>({
    url: "/admin/v1/accounts/partyCode",
    method: "get",
  });
}
export async function getAadatList<T>() {
  return ApiService.fetchData<T>({
    url: "/admin/v1/accounts/getAadat",
    method: "get",
  });
}

export async function apiGetEmployeeData<T>() {
  return ApiService.fetchData<T>({
    url: `/admin/v1/accounts/getEmployee?search=`,
    method: "get",
  });
}

export async function apiDepartment<T>() {
  return ApiService.fetchData<T>({
    url: `/admin/v1/companyBranches/getBranches`,
    method: "get",
  });
}

export async function apiAddAccount(payload: any) {
  return ApiService.fetchData({
    url: `/admin/v1/accounts`,
    method: "post",
    data: payload,
  });
}
export async function apiEditAccount(payload: any, id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/accounts/${id}`,
    method: "put",
    data: payload,
  });
}

export async function apiKycDeatilPut(payload: any, id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/accounts/kycDetails/${id}`,
    method: "put",
    data: payload,
  });
}

export async function apiAddressTableCheckBoxPut(payload: any, id: number) {
  // this api was use for addresh detail check box update
  return ApiService.fetchData({
    url: `/admin/v1/addressDetails/check-box/${id}`,
    method: "put",
    data: payload,
  });
}

export async function apiAddBankAccount<T>(payload: any) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/bankDetail`,
    method: "post",
    data: payload,
  });
}
export async function apiEditBankAccount<T>(payload: any, id: any) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/bankDetail/${id}`,
    method: "put",
    data: payload,
  });
}
export async function apiAddDocumentDetails<T>(payload: any) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/uploadDocument`,
    method: "post",
    data: payload,
  });
}

export async function apiAddAddressAccount<T>(payload: any) {
  return ApiService.fetchData<T>({
    url: "/admin/v1/addressDetails",
    method: "post",
    data: payload,
  });
}
export async function apiEditAddressAccount<T>(payload: any, id: any) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/addressDetails/${id}`,
    method: "put",
    data: payload,
  });
}

export async function postTermsDetail<T>(payload: any) {
  return ApiService.fetchData<T>({
    url: "/admin/v1/termsDetail",
    method: "post",
    data: payload,
  });
}

export async function postGroupDetail<T>(payload: any) {
  return ApiService.fetchData<T>({
    url: "/admin/v1/groupDetail",
    method: "post",
    data: payload,
  });
}

export async function updateAddressDetail<T>(payload: any) {
  return ApiService.fetchData<T>({
    url: "/admin/v1/addressDetails",
    method: "put",
    data: payload,
  });
}

export async function apiGetKycDetailId<T>(id: any) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/accounts/kycDetails/${id}`,
    method: "get",
  });
}
export async function apiGetOneAccountList<T>(id: any) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/termsDetail/getFromAccountId/${id}`,
    method: "get",
  });
}
export async function apiGetAllAccountDetails() {
  return ApiService.fetchData({
    url: `/admin/v1/accounts`,
    method: "get",
  });
}
export async function apiDeleteAccountDetails(id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/accounts/${id}`,
    method: "delete",
  });
}
export async function apiGetAccountDetailsPDF(id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/accounts/pdf/${id}`,
    method: "get",
  });
}
export async function apiGetTerms<T>(id: any) {
  return ApiService.fetchData<T>({
    url: `/admin/v1/accounts/kycDetails/${id}`,
    // url: `/admin/v1/termsDetail/getFromAccountId/${id}`,
    method: "get",
  });
}
export async function apiDeleteTermsDetails(id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/termsDetail/${id}`,
    method: "delete",
  });
}
export async function apiEditTermsDetails(id: number, data: any) {
  return ApiService.fetchData({
    url: `/admin/v1/termsDetail/${id}`,
    method: "put",
    data: data,
  });
}
export async function updateUserDefault(data: any, id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/users/check-box/${id}`,
    method: "put",
    data: data,
  });
}
export async function apiDeleteAddressDetails(id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/addressDetails/${id}`,
    method: "delete",
  });
}

export async function apiDeleteBankDetails(id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/bankDetail/${id}`,
    method: "delete",
  });
}
export async function apiDeleteReferenceDetails(id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/referenceDetails/${id}`,
    method: "delete",
  });
}
export async function apiDeleteDocumentDetails(id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/uploadDocument/${id}`,
    method: "delete",
  });
}

export async function advanceKycSearch(payload: any) {
  return ApiService.fetchData({
    url: `/admin/v1/accounts/kycDetails/advanceSearch`,
    method: "post",
    data: payload,
  });
}
export async function apiUpdateAccountUser(payload: any, id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/user/${id}`,
    method: "post",
    data: payload,
  });
}
export async function apiDeleteUserDetails(id: number) {
  return ApiService.fetchData({
    url: `/admin/v1/users/${id}`,
    method: "delete",
  });
}
