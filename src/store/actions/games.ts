import { fetchGames } from "@/services/api/games";
import { TypeDispatch } from "@/types/global";

import {
  GET_GAMES,
  SET_LOADING_GAMES,
} from "../types";

export const getGames = () => async (dispatch: TypeDispatch) => {
  try {
    dispatch({ type: SET_LOADING_GAMES, payload: true });

    const response = await fetchGames();

    if (response) {
      dispatch({ type: GET_GAMES, payload: response.data });
    }
  } catch (e) {
    console.log(e)
  } finally {
    dispatch({ type: SET_LOADING_GAMES, payload: false });
  }
};
