import axios from "axios";

export const loginUser = async (dispatch: any, payload: any) => {
  let data = await axios
    .post(process.env.REACT_APP_BACKEND_URL + "/auth/login", payload)
    .then((res) => res.data);
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: {
      ...data,
    },
  });
};

export const signUpUser = async (dispatch: any, payload: any) => {};

export const logoutUser = async (dispatch: any, payload: any) => {};
