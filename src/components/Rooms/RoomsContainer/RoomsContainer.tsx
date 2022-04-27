import React from "react";
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

  const handleFormChange = (e: any) => {
    if (e["building"] || e["room"]) {
      const name = Object.keys(e)[0];
      handleChange({ target: { name: name, value: e[name] } });
    } else handleChange(e);
  };

  return <RoomsPresenter values={values} handleFormChange={handleFormChange} />;
}
