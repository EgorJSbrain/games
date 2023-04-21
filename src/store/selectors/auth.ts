import { RootState } from "..";

export const userSelector = (state: RootState) => state.auth.user;
export const authLoadingSelector = (state: RootState) => state.auth.loading;
export const authErrorSelector = (state: RootState) => state.auth.error;
