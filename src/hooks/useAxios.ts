import { useEffect, useState } from "react";
import { useAuthState, useLoading } from "../context";
import { useRefreshToken } from "./useRefreshToken";

export const useAxios = <S>(url: string, fetchOnLoad?: boolean) => {
  const [data, setData] = useState<S>();
  const [urlState, setUrlState] = useState("");
  const { access_token } = useAuthState();
  const [axios] = useRefreshToken();
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
    setUrlState(url);
  }, [url]);

  const fetchData = async (
    url?: string,
    method?: "get" | "post" | "put",
    data?: any
  ) => {
    await axios({
      url: url || urlState,
      method: method || "get",
      headers: { Authorization: `Bearer ${access_token}` },
      data: { ...data },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        if (e?.response && e?.response?.data) {
          throw new Error(e?.response?.data?.error);
        }
        throw new Error(e);
      });
  };

  const submit = async (
    validateForm: any,
    form?: any,
    method?: any,
    onSuccess?: any
  ) => {
    showLoader();
    validateForm()
      .then(() =>
        fetchData(undefined, method, form).then(() => {
          hideLoader();
          onSuccess();
        })
      )
      .catch(() => hideLoader());
  };

  useEffect(() => {
    if (fetchOnLoad) fetchData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOnLoad]);

  return { data, fetchData, submit };
};
