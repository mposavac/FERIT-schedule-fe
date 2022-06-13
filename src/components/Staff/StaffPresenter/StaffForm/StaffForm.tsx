import React from "react";
import { useTranslation } from "../../../../context";
import { InputSelect } from "../../../shared/InputSelect/InputSelectContatiner/InputSelectContainer";
import InputField from "../../../shared/SearchForm/InputField/InputField";
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
      handleSearch={handleSearch}
      additionalButtons={
        isThereCalendarEvents ? (
          <button onClick={toggleStaffInfo}>{t("button.staffInfo")}</button>
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
          onChange={handleFormChange}
        />
        <InputField
          name="endDate"
          type="date"
          value={values.endDate}
          onChange={handleFormChange}
        />
        <InputField
          name="employee"
          customField={
            <InputSelect
              name="employee"
              selectedOption={values.employee}
              optionsList={staffOptions}
              onChange={handleFormChange}
              searchable={true}
            />
          }
        />
      </>
    </SearchForm>
  );
}
