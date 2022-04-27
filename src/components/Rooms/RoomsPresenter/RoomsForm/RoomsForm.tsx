import React from "react";
import { InputSelect } from "../../../shared/InputSelect/InputSelectContatiner/InputSelectContainer";
import { RoomsFormPresenterProps } from "../types";

export default function RoomsFormPresenter({
  values,
  handleFormChange,
  buildingOptions,
  roomsOptions,
}: RoomsFormPresenterProps) {
  console.log(values);
  return (
    <div className="rooms__form__container__content">
      <input
        type="date"
        name="date"
        value={values.date}
        onChange={(e: any) => handleFormChange(e)}
      />
      <InputSelect
        name="building"
        selectedOption={values.building}
        optionsList={buildingOptions}
        onChange={handleFormChange}
      />
      <InputSelect
        name="room"
        selectedOption={values.room}
        optionsList={roomsOptions}
        onChange={handleFormChange}
      />
      <button>Search</button>
    </div>
  );
}
