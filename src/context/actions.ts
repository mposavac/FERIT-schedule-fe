import axios from "axios";
import { LoginForm, SignUpForm } from "../interfaces/auth.types";

export const loginUser = async (dispatch: any, payload: LoginForm) => {
  let data = await axios
    .post(process.env.REACT_APP_BACKEND_URL + "/auth/login", payload)
    .then((res) => res.data)
    .catch((e) => {
      if (e.response && e.response.data) throw new Error(e.response.data.error);
    });
  dispatch({
    type: "LOGIN_SUCCESS",
    payload: {
      ...data,
    },
  });
};

export const signUpUser = async (dispatch: any, payload: SignUpForm) => {
  let data = await axios
    .post(process.env.REACT_APP_BACKEND_URL + "/auth/signup", payload)
    .then((res) => res.data)
    .catch((e) => {
      if (e.response && e.response.data) throw new Error(e.response.data.error);
    });
  dispatch({
    type: "SIGNUP_SUCCESS",
    payload: {
      ...data,
    },
  });
};

export const logoutUser = async (dispatch: any, payload: any) => {};
