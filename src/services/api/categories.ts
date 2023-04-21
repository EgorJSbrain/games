import axiosApi from "../axios";

export function fetchCategories() {
  return axiosApi.get("categories");
}
