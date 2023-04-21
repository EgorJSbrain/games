import { AnyAction, combineReducers } from "redux";

import { IStoreState } from "@/types/global";

import games from "./games";
import auth from "./auth";
import categories from "./categories";

const appReducer = combineReducers({
  auth,
  games,
  categories,
});

const rootReducer = (state: IStoreState | undefined, action: AnyAction) => {
  return appReducer(state, action);
};

export { rootReducer };
