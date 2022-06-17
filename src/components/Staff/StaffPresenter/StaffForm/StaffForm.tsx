import React from "react";
import { userIcon } from "../../../../styles/assets/images";
import Button from "../../../shared/Button/Button";
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
  return (
    <SearchForm
      searchText={"form.staff"}
      handleSearch={handleSearch}
      additionalButtons={
        isThereCalendarEvents ? (
          <Button
            text="button.staffInfo"
            icon={userIcon}
            onClick={toggleStaffInfo}
          />
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
