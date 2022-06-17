import React from "react";
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
      startTime: moment(today).startOf("hour").format("HH:mm"),
      endTime: moment(today)
        .startOf("hour")
        .add(1, "hour")
        .add("30", "minutes")
        .format("HH:mm"),
      capacity: 1,
    },
    searchSchema
  );
  const { data, submit } = useAxios<any>(`/scheduler/availability`);

  const handleFormChange = (e: any) => {
    if (e["building"]) {
    } else handleChange(e);
  };
  const handleSearch = () => {
    submit(validateForm, values, "post");
  };

  return (
    <SchedulerPresenter
      values={values}
      availability={data}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
    />
  );
}
