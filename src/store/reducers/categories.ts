import { StateCategories } from "@/types/global";
import { AnyAction } from "redux";
import {
  SET_LOADING_CATEGORIES,
  GET_CATEGORIES,
} from "../types";

const initialState: StateCategories = {
  loading: false,
  data: [],
};

const categories = (state: StateCategories = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOADING_CATEGORIES:
      return {
        ...state,
        loading: !state.loading,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
};

export default categories;