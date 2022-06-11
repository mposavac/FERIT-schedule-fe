import moment from "moment";
import { useState, useEffect } from "react";

export const useTime = () => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(moment());
  };

  return [date.format("DD.MM.YYYY"), date.format("HH:mm:ss")];
};
