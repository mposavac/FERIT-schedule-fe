export const initState = {
  user: undefined,
  email: undefined,
  access_token: undefined,
  refresh_token: undefined,
};

export const AuthReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...initState,
        ...action.payload,
      };
    default:
      return state;
  }
};
