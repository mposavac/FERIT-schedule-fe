import React from "react";
import { useTranslation } from "../../../../context";
import SearchForm from "../../../shared/SearchForm/SearchForm";
import { SchedulerFormProps } from "../../types";

export default function SchedulerForm({
  values,
  handleFormChange,
  handleSearch,
}: SchedulerFormProps) {
  const { t } = useTranslation();
  return (
    <SearchForm
      searchText={"form.scheduler"}
      date={values.date}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
      additionalInputFields={
        <>
          <div className="search__form__container__content__field">
            <label>{t("form.startTime")}</label>
            <input
              type="time"
              name="startTime"
              value={values.startTime}
              onChange={(e: any) => handleFormChange(e)}
            />
          </div>
          <div className="search__form__container__content__field">
            <label>{t("form.endTime")}</label>
            <input
              type="time"
              name="endTime"
              value={values.endTime}
              onChange={(e: any) => handleFormChange(e)}
            />
          </div>
          <div className="search__form__container__content__field">
            <label>{t("form.capacity")}</label>
            <input
              type="number"
              name="capacity"
              min={0}
              value={values.capacity}
              onChange={(e: any) => handleFormChange(e)}
            />
          </div>
        </>
      }
    />
  );
}
