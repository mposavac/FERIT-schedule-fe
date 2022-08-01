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
    <SearchForm searchText={"form.scheduler"} handleSearch={handleSearch}>
      <>
        <InputField
          name="date"
          type="date"
          value={values.date}
          handleChange={handleFormChange}
        />
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
