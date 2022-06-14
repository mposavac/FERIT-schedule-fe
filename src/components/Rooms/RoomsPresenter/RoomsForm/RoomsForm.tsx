import React, { Fragment } from "react";
import { useTranslation } from "../../../../context";
import { InputSelect } from "../../../shared/InputSelect/InputSelectContatiner/InputSelectContainer";
import InputField from "../../../shared/SearchForm/InputField/InputField";
import SearchForm from "../../../shared/SearchForm/SearchForm";
import { RoomsFormProps } from "../../types";

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
      handleSearch={handleSearch}
      additionalButtons={
        isThereCalendarEvents ? (
          <button onClick={toggleStatsOverlay}>{t("button.statistics")}</button>
        ) : (
          <></>
        )
      }
    >
      <>
        <InputField
          name="startDate"
          type="date"
          value={values.startDate}
          handleChange={handleFormChange}
        />
        <InputField
          name="endDate"
          type="date"
          value={values.endDate}
          handleChange={handleFormChange}
        />
        <InputField
          name="building"
          customField={
            <InputSelect
              name="building"
              selectedOption={values.building}
              optionsList={buildingsOptions}
              onChange={handleFormChange}
            />
          }
        />
        <InputField
          name="room"
          customField={
            <InputSelect
              name="room"
              selectedOption={values.room}
              optionsList={roomsOptions}
              onChange={handleFormChange}
              disabled={!values.building.value}
              searchable={true}
            />
          }
        />
      </>
    </SearchForm>
  );
}
