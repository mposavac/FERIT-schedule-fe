import moment from "moment";
import React, { useEffect, useState } from "react";
import { useAuthState, useTranslation } from "../../../context";
import { useTime } from "../../../hooks/useTime";
import HomePresenter from "../HomePresenter/HomePresenter";

export default function HomeContainer() {
  const { username } = useAuthState();
  const [greeting, setGreeting] = useState("greeting.welcome");
  const { t } = useTranslation();
  const [date, time] = useTime();

  useEffect(() => {
    const hours = moment().hours();
    if (hours >= 5 && hours < 12) setGreeting(t("greeting.morning"));
    else if (hours >= 12 && hours < 17) setGreeting(t("greeting.afternoon"));
    else setGreeting(t("greeting.evening"));
  }, [t]);

  return (
    <HomePresenter
      username={username}
      greeting={greeting}
      date={date}
      time={time}
    />
  );
}
