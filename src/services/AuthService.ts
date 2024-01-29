/** @format */

import type {
  SignInCredential,
  SignUpCredential,
  ForgotPassword,
  ResetPassword,
  SignInResponse,
  SignUpResponse,
} from "@/@types/auth";

import ApiService from "./ApiService";

export async function apiSignIn(data: SignInCredential) {
  return ApiService.fetchData<SignInResponse>({
    url: "/admin/v1/auth/login",
    method: "post",
    data,
  });
}
export async function apiAddAccountUser(data: any) {
  return ApiService.fetchData({
    url: "/admin/v1/users",
    method: "post",
    data,
  });
}

export async function apiSignUp(data: SignUpCredential) {
  return ApiService.fetchData<SignUpResponse>({
    url: "/sign-up",
    method: "post",
    data,
  });
}

export async function apiSignOut() {
  return ApiService.fetchData({
    url: "/sign-out",
    method: "post",
  });
}

export async function apiForgotPassword(data: ForgotPassword) {
  return ApiService.fetchData({
    url: "/forgot-password",
    method: "post",
    data,
  });
}

export async function apiResetPassword(data: ResetPassword) {
  return ApiService.fetchData({
    url: "/reset-password",
    method: "post",
    data,
  });
}
