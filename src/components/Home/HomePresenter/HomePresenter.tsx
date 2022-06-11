import React from "react";
import { wavingHand } from "../../../styles/assets/images";
import { HomePresenterProps } from "../types";
import "./HomePresenter.scss";

export default function HomePresenter({
  username,
  greeting,
  date,
  time,
}: HomePresenterProps) {
  return (
    <div className="page__wrapper home__page">
      <div className="home__page__title__container flex-center">
        <img src={wavingHand} alt="wave" />
        <h3>
          {greeting}, {username}
        </h3>
      </div>

      <div className="home__page__time__container">
        <p>
          {date}, {time}
        </p>
      </div>
    </div>
  );
}
