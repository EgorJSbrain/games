import { LoginData, CommonAuthData } from "@/types/global";
import axiosApi from "../axios";

export function fetchLogin(data: LoginData) {
  return axiosApi.post("login", data);
}

export function fetchLogout(data: CommonAuthData) {
  return axiosApi.post("logout", data);
}

export function fetchMe(data: LoginData) {
  return axiosApi.post("login", data);
}
