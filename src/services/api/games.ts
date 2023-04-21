import axiosApi from "../axios";

export function fetchGames() {
  return axiosApi.get("games");
}
