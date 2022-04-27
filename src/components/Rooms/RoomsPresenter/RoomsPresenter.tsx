import React from "react";
import RoomsFormPresenter from "./RoomsForm/RoomsForm";

import "./RoomsPresenter.scss";
import { RoomsPresenterProps } from "./types";

export default function RoomsPresenter({
  values,
  handleFormChange,
}: RoomsPresenterProps) {
  //TODO: Implement real data
  const buildings = [
    { text: "Trpimirova", value: "0" },
    { text: "Kampus", value: "1" },
  ];

  //TODO: Implement real data
  const rooms = [
    { text: "K2-1", value: "0" },
    { text: "K2-2", value: "1" },
    { text: "K2-3", value: "2" },
    { text: "K2-4", value: "3" },
  ];

  return (
    <div>
      <div className="rooms__form__container">
        <RoomsFormPresenter
          values={values}
          handleFormChange={handleFormChange}
          buildingOptions={buildings}
          roomsOptions={rooms}
        />
      </div>
    </div>
  );
}
