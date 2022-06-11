import React, { useEffect, useState } from "react";
import { useAxios } from "../../../hooks/useAxios";
import { useForm } from "../../../hooks/useForm";
import { RoomsForm } from "../../../interfaces/forms.type";
import {
  BuildingsOptionsResponse,
  RoomsInfo,
  CalendarEventsResponse,
} from "../../../interfaces/responses.type";
import { searchSchema } from "../../../schemas";
import { InputSelectOption } from "../../shared/InputSelect/types";
import RoomsPresenter from "../RoomsPresenter/RoomsPresenter";
import moment from "moment";

export default function RoomsContainer() {
  const today = new Date().toISOString();
  const [values, handleChange, validateForm] = useForm<RoomsForm>(
    {
      startDate: today.substring(0, today.indexOf("T")),
      endDate: moment(today).add(5, "days").format("YYYY-MM-DD"),
      building: { value: "", text: "" },
      room: { value: "", text: "" },
    },
    searchSchema
  );
  const { data, submit } = useAxios<CalendarEventsResponse[]>(
    `/rooms/availability/${values.startDate}/${values.endDate}/${values.room.value}`
  );
  const { data: fetchedOptions } = useAxios<BuildingsOptionsResponse[]>(
    "/rooms/buildings",
    true
  );
  const [buildingsOptions, setBuildingsOptions] = useState<InputSelectOption[]>(
    []
  );
  const [roomsOptions, setRoomsOptions] = useState<InputSelectOption[]>([]);
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);

  const handleFormChange = (e: any) => {
    if (e["building"] || e["room"]) {
      const name = Object.keys(e)[0];
      handleChange({ target: { name: name, value: e[name] } });
      if (e["building"] && fetchedOptions) {
        let building = fetchedOptions.find(
          (building: BuildingsOptionsResponse) =>
            building.id === e["building"].value
        );
        if (building) {
          let roomsOptions = building.prostorije.map((room: RoomsInfo) => ({
            text: room.ime,
            value: room["-id"],
          }));
          setRoomsOptions(roomsOptions);
        }
      }
    } else handleChange(e);
  };

  const handleSearch = () => {
    submit(validateForm);
  };

  const handleStatsOverlay = () => {
    setIsStatsOpen(!isStatsOpen);
  };

  useEffect(() => {
    if (fetchedOptions) {
      const buildingsOptions = fetchedOptions.map((building: any) => {
        return { text: building.naziv, value: building.id };
      });
      setBuildingsOptions(buildingsOptions);
    }
  }, [fetchedOptions]);

  return (
    <RoomsPresenter
      values={values}
      calendarEvents={data}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
      toggleStatsOverlay={handleStatsOverlay}
      isStatsOpen={isStatsOpen}
      buildingsOptions={buildingsOptions}
      roomsOptions={roomsOptions}
    />
  );
}
