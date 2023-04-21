import { StateGames } from "@/types/global";
import { AnyAction } from "redux";
import {
  SET_LOADING_GAMES,
  GET_GAMES,
} from "../types";

const initialState: StateGames = {
  loading: false,
  data: [],
};

const games = (state: StateGames = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOADING_GAMES:
      return {
        ...state,
        loading: !state.loading,
      };
    case GET_GAMES:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
};

export default games;