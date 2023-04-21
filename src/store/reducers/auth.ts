import {
  AUTH_LOGIN,
  AUTH_SET_LOADING,
  AUTH_LOGOUT,
  AUTH_FAILURE,
} from "../types";

import { StateAuth } from "@/types/global";

import { AnyAction } from "redux";

const initialState: StateAuth = {
  loading: false,
  user: null,
  error: '',
};

const auth = (state: StateAuth = initialState, action: AnyAction) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload,
        error: '',
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case AUTH_SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
