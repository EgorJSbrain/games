import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export interface CommonAuthData {
  username: string;

}
export interface LoginData extends CommonAuthData {
  password: string;
};

export interface UserType {
  name: string,
  avatar: string,
  event: string,
  password: string,
}

export interface GameType {
  name: string,
  description: string,
  code: string,
  icon: string,
  categoryIds: number[],
}

export interface CategoryType {
  id: number,
  name: string,
}

export interface StateGames {
  loading: boolean;
  data: GameType[];
}

export interface StateCategories {
  loading: boolean;
  data: CategoryType[];
}

export interface StateAuth {
  loading: boolean;
  user: UserType | null;
  error: string;
}

export interface IStoreState {
  auth: StateAuth;
  games: StateGames;
  categories: StateCategories;
}

export type TypeDispatch = ThunkDispatch<IStoreState, void, AnyAction>;
