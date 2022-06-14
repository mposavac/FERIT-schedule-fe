import React from "react";
import InputField from "../../../shared/SearchForm/InputField/InputField";
import SearchForm from "../../../shared/SearchForm/SearchForm";
import { SchedulerFormProps } from "../../types";

export default function SchedulerForm({
  values,
  handleFormChange,
  handleSearch,
}: SchedulerFormProps) {
  return (
    <SearchForm
      searchText={"form.scheduler"}
      date={values.date}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
    >
      <>
        <InputField
          name="startTime"
          type="time"
          value={values.startTime}
          handleChange={handleFormChange}
        />
        <InputField
          name="endTime"
          type="time"
          value={values.endTime}
          handleChange={handleFormChange}
        />
        <InputField
          name="capacity"
          type="number"
          value={values.capacity}
          handleChange={handleFormChange}
          min={1}
        />
      </>
    </SearchForm>
  );
}
