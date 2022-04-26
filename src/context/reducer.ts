import { Actions } from "./types";

export const initState = {
  id: undefined,
  username: undefined,
  email: undefined,
  access_token: undefined,
  refresh_token: undefined,
};

export const AuthReducer = (state = initState, action: Actions) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...initState,
        ...action.payload,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...initState,
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
