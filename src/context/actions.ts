import axios from "../utils/axiosInstance";
import { LoginForm, SignUpForm } from "../interfaces/auth.types";

export const loginUser = async (dispatch: any, payload: LoginForm) => {
  let data = await axios
    .post("/auth/login", payload)
    .then((res) => res.data)
    .catch((e) => {
      if (e?.response && e?.response?.data)
        throw new Error(e.response.data.error);
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
    .post("/auth/signup", payload)
    .then((res) => res.data)
    .catch((e) => {
      if (e?.response && e?.response?.data)
        throw new Error(e.response.data.error);
    });
  dispatch({
    type: "SIGNUP_SUCCESS",
    payload: {
      ...data,
    },
  });
};

export const refreshToken = async (
  dispatch: any,
  payload: { id: string | undefined; refresh_token: string | undefined }
) => {
  let data = await axios
    .post("/auth/refresh", payload)
    .then((res) => res.data)
    .catch((e) => {
      if (e?.response && e?.response?.data)
        throw new Error(e.response.data.error);
    });
  dispatch({
    type: "REFRESH_SUCCESS",
    payload: {
      ...data,
    },
  });
  return data?.access_token;
};

export const logoutUser = async (
  dispatch: any,
  payload: { id: string | undefined }
) => {
  await axios
    .post("/auth/logout", { id: payload.id })
    .then(() => {})
    .catch((e) => {
      if (e?.response && e?.response?.data)
        throw new Error(e.response.data.error);
    });
  dispatch({
    type: "LOGOUT_SUCCESS",
  });
};
