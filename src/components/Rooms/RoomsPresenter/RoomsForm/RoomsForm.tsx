import React, { Fragment } from "react";
import { useTranslation } from "../../../../context";
import { InputSelect } from "../../../shared/InputSelect/InputSelectContatiner/InputSelectContainer";
import SearchForm from "../../../shared/SearchForm/SearchForm";
import { RoomsFormProps } from "../types";

export default function RoomsFormPresenter({
  values,
  handleFormChange,
  handleSearch,
  buildingsOptions,
  roomsOptions,
  isThereCalendarEvents,
  toggleStatsOverlay,
}: RoomsFormProps) {
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
              optionsList={buildingsOptions}
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
