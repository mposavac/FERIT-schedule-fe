import React from "react";
import { useTranslation } from "../../../../context";
import { InputSelect } from "../../../shared/InputSelect/InputSelectContatiner/InputSelectContainer";
import { RoomsFormPresenterProps } from "../types";

export default function RoomsFormPresenter({
  values,
  handleFormChange,
  handleSearch,
  buildingOptions,
  roomsOptions,
}: RoomsFormPresenterProps) {
  const { t } = useTranslation();
  return (
    <div className="rooms__form__container__content">
      <h3>{t("form.rooms")}</h3>
      <div className="rooms__form__container__content__field">
        <label>{t("form.date")}</label>
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={(e: any) => handleFormChange(e)}
        />
      </div>
      <div className="rooms__form__container__content__field">
        <label>{t("form.building")}</label>
        <InputSelect
          name="building"
          selectedOption={values.building}
          optionsList={buildingOptions}
          onChange={handleFormChange}
        />
      </div>
      <div className="rooms__form__container__content__field">
        <label>{t("form.room")}</label>
        <InputSelect
          name="room"
          selectedOption={values.room}
          optionsList={roomsOptions}
          onChange={handleFormChange}
          disabled={!values.building.value}
        />
      </div>
      <button onClick={handleSearch}>{t("search")}</button>
    </div>
  );
}
