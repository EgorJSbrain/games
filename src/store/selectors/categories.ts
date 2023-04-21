import { RootState } from "..";

export const categoriesSelector = (state: RootState) => state.categories.data;
export const categoriesLoadingSelector = (state: RootState) => state.categories.loading;
