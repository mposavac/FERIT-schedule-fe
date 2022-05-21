import { useEffect } from "react";
import { useAuthDispatch, useAuthState } from "../context";
import { refreshToken } from "../context/actions";
import axiosInstance from "../utils/axiosInstance";

export const useRefreshToken = () => {
  const dispatch = useAuthDispatch();
  let { id, refresh_token } = useAuthState();

  useEffect(() => {
    const resInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevReq = err?.config;
        if (err?.response?.status === 401) {
          const newAccessToken = await refreshToken(dispatch, {
            id,
            refresh_token,
          });
          prevReq.sent = true;
          prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(prevReq);
        }
        return err;
      }
    );
    return () => {
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [dispatch, id, refresh_token]);

  return [axiosInstance] as const;
};
