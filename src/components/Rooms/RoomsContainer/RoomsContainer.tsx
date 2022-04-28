import React from "react";
import { useLoading } from "../../../context";
import { useAxios } from "../../../hooks/useAxios";
import { useForm } from "../../../hooks/useForm";
import { RoomsForm } from "../../../interfaces/forms.type";
import RoomsPresenter from "../RoomsPresenter/RoomsPresenter";

export default function RoomsContainer() {
  const today = new Date().toISOString();
  const [values, handleChange] = useForm<RoomsForm>({
    date: today.substring(0, today.indexOf("T")),
    building: { value: "", text: "" },
    room: { value: "", text: "" },
  });
  const { showLoader, hideLoader } = useLoading();
  const [data, fetchData] = useAxios("/rooms/availability/10");

  const handleFormChange = (e: any) => {
    if (e["building"] || e["room"]) {
      const name = Object.keys(e)[0];
      handleChange({ target: { name: name, value: e[name] } });
    } else handleChange(e);
  };

  const handleSearch = () => {
    showLoader();
    fetchData().then(() => {
      hideLoader();
    });
  };

  return (
    <RoomsPresenter
      values={values}
      calendarEvents={data}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
    />
  );
}
