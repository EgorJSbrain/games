import { RootState } from "..";

export const gamesSelector = (state: RootState) => state.games.data;
export const gamesLoadingSelector = (state: RootState) => state.games.loading;
