import React, { Fragment } from "react";
import { useTranslation } from "../../../../context";
import { InputSelect } from "../../../shared/InputSelect/InputSelectContatiner/InputSelectContainer";
import SearchForm from "../../../shared/SearchForm/SearchForm";
import { RoomsFormPresenterProps } from "../types";

export default function RoomsFormPresenter({
  values,
  handleFormChange,
  handleSearch,
  buildingOptions,
  roomsOptions,
  isThereCalendarEvents,
  toggleStatsOverlay,
}: RoomsFormPresenterProps) {
  const { t } = useTranslation();
  return (
    <SearchForm
      searchText={"form.rooms"}
      date={values.date}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
      additionalInputFields={
        <>
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
        </>
      }
      additionalButtons={
        isThereCalendarEvents ? (
          <button onClick={toggleStatsOverlay}>{t("button.statistics")}</button>
        ) : (
          <></>
        )
      }
    />
  );
}
