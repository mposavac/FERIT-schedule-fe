export const loginUser = async (dispatch: any, payload: any) => {
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: {
      user: "test",
      email: "test@test.net",
      access_token: "token",
      refresh_token: "refresh",
    },
  });
};

export const signUpUser = async (dispatch: any, payload: any) => {};

export const logoutUser = async (dispatch: any, payload: any) => {};
