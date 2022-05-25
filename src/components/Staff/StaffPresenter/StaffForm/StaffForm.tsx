import React from "react";
import { useTranslation } from "../../../../context";
import { InputSelect } from "../../../shared/InputSelect/InputSelectContatiner/InputSelectContainer";
import SearchForm from "../../../shared/SearchForm/SearchForm";
import { StaffFormProps } from "../../types";

export default function StaffForm({
  values,
  handleFormChange,
  staffOptions,
  handleSearch,
  toggleStaffInfo,
  isThereCalendarEvents,
}: StaffFormProps) {
  const { t } = useTranslation();
  return (
    <SearchForm
      searchText={"form.staff"}
      date={values.date}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
      additionalButtons={
        isThereCalendarEvents ? (
          <button onClick={toggleStaffInfo}>{t("button.staffInfo")}</button>
        ) : (
          <></>
        )
      }
    >
      <div className="search__form__container__content__field">
        <label>{t("form.employee")}</label>
        <InputSelect
          name="employee"
          selectedOption={values.employee}
          optionsList={staffOptions}
          onChange={handleFormChange}
        />
      </div>
    </SearchForm>
  );
}
