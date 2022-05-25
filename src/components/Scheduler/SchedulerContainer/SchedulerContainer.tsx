import React, { useState } from "react";
import moment from "moment";
import { useAxios } from "../../../hooks/useAxios";
import { useForm } from "../../../hooks/useForm";
import { SchedulerForm } from "../../../interfaces/forms.type";
import { searchSchema } from "../../../schemas";
import SchedulerPresenter from "../SchedulerPresenter/SchedulerPresenter";

export default function SchedulerContainer() {
  const today = new Date();
  const [values, handleChange, validateForm] = useForm<SchedulerForm>(
    {
      date: today.toISOString().substring(0, today.toISOString().indexOf("T")),
      startTime: moment(today).format("HH:mm"),
      endTime: moment(today).add(1, "hour").format("HH:mm"),
      capacity: 0,
    },
    searchSchema
  );
  const [displayOption, setDisplayOption] = useState("search");
  const [renderResults, setRenderResults] = useState(false);
  const [renderSearch, setRenderSearch] = useState(true);
  const { data, submit } = useAxios<any>(`/scheduler/availability`);

  const handleFormChange = (e: any) => {
    if (e["building"]) {
    } else handleChange(e);
  };
  const handleSearch = () => {
    submit(validateForm, values, "post", setDisplayOption("results"));
  };

  const toggleDisplayOption = () => {
    setDisplayOption(displayOption === "search" ? "results" : "search");
  };

  const handleRendering = () => {
    if (displayOption === "search") {
      setRenderResults(false);
      setRenderSearch(true);
    } else if (displayOption === "results") {
      setRenderResults(true);
      setRenderSearch(false);
    }
  };

  return (
    <SchedulerPresenter
      values={values}
      availability={data}
      displayOption={displayOption}
      render={{ renderResults, renderSearch }}
      handleRendering={handleRendering}
      toggleDisplayOption={toggleDisplayOption}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
    />
  );
}
