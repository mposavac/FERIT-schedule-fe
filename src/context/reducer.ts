export const initState = {
  user: "",
  email: "",
  access_token: "",
  refresh_token: "",
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
