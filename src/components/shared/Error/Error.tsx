import React, { useEffect } from "react";
import { useErrorMsg } from "../../../context";
import "./Error.scss";
import ErrorPresenter from "./ErrorPresenter";

export default function Error() {
  const { message, hideMsg } = useErrorMsg();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        hideMsg();
      }, 4000);
    }
  }, [message, hideMsg]);

  return message ? <ErrorPresenter message={message} /> : <></>;
}
