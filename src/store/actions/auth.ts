import { CommonAuthData, TypeDispatch } from "@/types/global";

import { AUTH_LOGIN, AUTH_SET_LOADING, AUTH_LOGOUT, AUTH_FAILURE } from "../types";
import { LoginData } from "@/types/global";
import { fetchLogin, fetchLogout, fetchMe } from "@/services/api/auth";
import { ResponseStatuses, STORAGE_TOKEN_NAME } from "@/constants/global";

export const login = (data: LoginData) => async (dispatch: TypeDispatch) => {
  try {
    dispatch({ type: AUTH_SET_LOADING, payload: true });

    const response = await fetchLogin(data);

    if (response.data.player) {
      // imitation of saving token to localStorage
      const str = `${response.data.player.username},${response.data.player.password}`;
      const encodedValue = btoa(str);
      localStorage.setItem(STORAGE_TOKEN_NAME, encodedValue)

      dispatch({ type: AUTH_LOGIN, payload: response.data.player });
    }

    return response.data;
  } catch (e: any) {
    console.log(e);

    dispatch({ type: AUTH_FAILURE, payload: e.response.data.error });

    return e.response;
  } finally {
    dispatch({ type: AUTH_SET_LOADING, payload: false });
  }
};

export const logout = (data: CommonAuthData) => async (dispatch: TypeDispatch) => {
  try {
    dispatch({ type: AUTH_SET_LOADING, payload: true });

    const response = await fetchLogout(data);

    if (response.data.status === ResponseStatuses.success) {
      dispatch({ type: AUTH_LOGOUT, payload: null });
      localStorage.removeItem(STORAGE_TOKEN_NAME);
    }

  } catch (e: any) {
    console.log(e);
    return e.response;
  } finally {
    dispatch({ type: AUTH_SET_LOADING, payload: false });
  }
};

export const checkMe = (data: LoginData) => async (dispatch: TypeDispatch) => {
  try {
    dispatch({ type: AUTH_SET_LOADING, payload: true });

    const response = await fetchMe(data);

    if (response.data.player) {
      dispatch({ type: AUTH_LOGIN, payload: response.data.player });
    }

    return response.data;
  } catch (e: any) {
    console.log(e);

    dispatch({ type: AUTH_FAILURE, payload: e.response.data.error });

    return e.response;
  } finally {
    dispatch({ type: AUTH_SET_LOADING, payload: false });
  }
};
