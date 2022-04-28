import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "../context";

export const useAxios = (url: string) => {
  const [data, setData] = useState(null);
  const [urlState, setUrlState] = useState("");
  const { access_token } = useAuthState();

  useEffect(() => {
    setUrlState(url);
  }, [url]);

  const fetchData = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + urlState, {
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

  return [data, fetchData] as const;
};
