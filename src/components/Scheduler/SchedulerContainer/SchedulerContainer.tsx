import React, { useState } from "react";
import moment from "moment";
import { useLoading } from "../../../context";
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
  const { showLoader, hideLoader } = useLoading();
  const [displayOption, setDisplayOption] = useState("search");
  const [data, fetchData] = useAxios<any>(`/scheduler/availability`);

  const handleFormChange = (e: any) => {
    if (e["building"]) {
    } else handleChange(e);
  };
  const handleSearch = () => {
    showLoader();
    validateForm()
      .then(() =>
        fetchData(undefined, "post", values).then(() => {
          hideLoader();
          setDisplayOption("results");
        })
      )
      .catch(() => hideLoader());
  };

  const toggleDisplayOption = () => {
    setDisplayOption(displayOption === "search" ? "results" : "search");
  };
  return (
    <SchedulerPresenter
      values={values}
      availability={data}
      displayOption={displayOption}
      toggleDisplayOption={toggleDisplayOption}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
    />
  );
}
