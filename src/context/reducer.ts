import { Actions, UserState } from "./types";

export const initState: UserState = {
  id: undefined,
  username: undefined,
  email: undefined,
  access_token: undefined,
  refresh_token: undefined,
};

export const AuthReducer = (state: UserState, action: Actions) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
    case "REFRESH_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...initState,
      };
    default:
      return state;
  }
};
