import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "../context";

export const useAxios = <S>(url: string, fetchOnLoad?: boolean) => {
  const [data, setData] = useState<S>();
  const [urlState, setUrlState] = useState("");
  const { access_token } = useAuthState();

  useEffect(() => {
    setUrlState(url);
  }, [url]);

  const fetchData = async (url?: string) => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + (url || urlState), {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        if (e.response && e.response.data)
          throw new Error(e.response.data.error);
      });
  };

  useEffect(() => {
    if (fetchOnLoad) fetchData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOnLoad]);

  return [data, fetchData] as const;
};
