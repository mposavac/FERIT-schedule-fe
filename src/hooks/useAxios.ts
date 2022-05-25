import { useEffect, useState } from "react";
import { useAuthState } from "../context";
import { useRefreshToken } from "./useRefreshToken";

export const useAxios = <S>(url: string, fetchOnLoad?: boolean) => {
  const [data, setData] = useState<S>();
  const [urlState, setUrlState] = useState("");
  const { access_token } = useAuthState();
  const [axios] = useRefreshToken();

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

  useEffect(() => {
    if (fetchOnLoad) fetchData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOnLoad]);

  return [data, fetchData] as const;
};
