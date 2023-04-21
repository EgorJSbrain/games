import { fetchCategories } from "@/services/api/categories";
import { fetchGames } from "@/services/api/games";
import { TypeDispatch } from "@/types/global";

import {
  GET_CATEGORIES,
  SET_LOADING_CATEGORIES,
} from "../types";

export const getCategories = () => async (dispatch: TypeDispatch) => {
  try {
    dispatch({ type: SET_LOADING_CATEGORIES, payload: true });

    const response = await fetchCategories();

    if (response) {
      dispatch({ type: GET_CATEGORIES, payload: response.data });
    }
  } catch (e) {
    console.log(e)
  } finally {
    dispatch({ type: SET_LOADING_CATEGORIES, payload: false });
  }
};
