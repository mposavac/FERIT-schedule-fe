import { combineReducers, Reducer } from "redux";
import { ReduxState } from "./index.types";

const reducers: Reducer = combineReducers({});

const rootReducer = (state: ReduxState | undefined, action: any) => {
  return reducers(state, action);
};

export default rootReducer;
