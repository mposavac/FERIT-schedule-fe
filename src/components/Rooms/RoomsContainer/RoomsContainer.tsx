import moment from "moment";
import React, { useState, useEffect } from "react";
import { useLoading, useTranslation } from "../../../context";
import { useAxios } from "../../../hooks/useAxios";
import { useForm } from "../../../hooks/useForm";
import { RoomsForm } from "../../../interfaces/forms.type";
import { RoomsResponse, TimeSlots } from "../../../interfaces/responses.type";
import RoomsPresenter from "../RoomsPresenter/RoomsPresenter";

export default function RoomsContainer() {
  const today = new Date().toISOString();
  const [values, handleChange] = useForm<RoomsForm>({
    date: today.substring(0, today.indexOf("T")),
    building: { value: "", text: "" },
    room: { value: "", text: "" },
  });
  const { showLoader, hideLoader } = useLoading();
  const [data, fetchData] = useAxios<RoomsResponse>(
    `/rooms/availability/${values.date}/10`
  );
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const [statsData, setStatsData] = useState<any>();
  const { t } = useTranslation();

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

  const handleStatsOverlay = () => {
    setIsStatsOpen(!isStatsOpen);
  };

  useEffect(() => {
    const calculateStatsData = () => {
      if (data && data.timeSlots) {
        const calendarEvents: TimeSlots[] = [...data.timeSlots];
        const timeWhenAvailable = 825;
        const minutesArr: number[] = calendarEvents.map((value: TimeSlots) => {
          const startTime = moment(value["pocetak"], "HH:mm");
          const endTime = moment(value["kraj"], "HH:mm");
          return endTime.diff(startTime, "minutes");
        });
        const busyHours = minutesArr.reduce(
          (prev: number, curr: number) => prev + curr,
          0
        );
        const roomUnvailable =
          parseFloat((busyHours / timeWhenAvailable).toFixed(2)) * 100;
        const roomAvailable =
          parseFloat(
            ((timeWhenAvailable - busyHours) / timeWhenAvailable).toFixed(2)
          ) * 100;
        const pieData = [
          {
            x: 1,
            y: roomUnvailable,
            label: `${t("chart.unavailable")} ${roomUnvailable}%`,
          },
          {
            x: 2,
            y: roomAvailable,
            label: `${t("chart.available")} ${roomAvailable}%`,
          },
        ];
        setStatsData(pieData);
      }
    };
    calculateStatsData();
  }, [data, t]);

  return (
    <RoomsPresenter
      values={values}
      calendarEvents={data}
      handleFormChange={handleFormChange}
      handleSearch={handleSearch}
      toggleStatsOverlay={handleStatsOverlay}
      isStatsOpen={isStatsOpen}
      statsData={statsData}
    />
  );
}
