import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "../../../../../context";
import { TimeSlots } from "../../../../../interfaces/responses.type";
import { StatisticsContainerProps } from "../../types";
import StatisticsPresenter from "../StatisticsPresenter/StatisticsPresenter";

export default function StatisticsContainer({
  toggleStatsOverlay,
  calendarEvents,
}: StatisticsContainerProps) {
  const [statsData, setStatsData] = useState<any>();
  const [statsType, setStatsType] = useState<string>("availability");
  const { t } = useTranslation();

  useEffect(() => {
    const calculateStatsData = () => {
      const calcPrecentage = (value1: number, value2: number) => {
        return parseFloat((value1 / value2).toFixed(2)) * 100;
      };

      const capitalizeWords = (str: string) => {
        const arr = str.split(" ");
        for (let i = 0; i < arr.length; i++) {
          arr[i] =
            arr[i].charAt(0).toUpperCase() +
            arr[i].slice(1).toLocaleLowerCase();
        }
        return arr.join(" ");
      };

      if (calendarEvents && calendarEvents.timeSlots) {
        const calendarEventsArr: TimeSlots[] = [...calendarEvents.timeSlots];
        const timeWhenAvailable = 825;
        if (statsType === "availability") {
          let busyHours = 0;
          calendarEventsArr.forEach((value: TimeSlots) => {
            const startTime = moment(value["pocetak"], "HH:mm");
            const endTime = moment(value["kraj"], "HH:mm");
            busyHours += endTime.diff(startTime, "minutes");
          });
          const roomUnvailable = calcPrecentage(busyHours, timeWhenAvailable);
          const roomAvailable = calcPrecentage(
            timeWhenAvailable - busyHours,
            timeWhenAvailable
          );
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
        } else if (statsType === "staff") {
          const staffByRoom = calendarEventsArr.map((value: TimeSlots) => {
            const startTime = moment(value["pocetak"], "HH:mm");
            const endTime = moment(value["kraj"], "HH:mm");
            return {
              nastavnik: capitalizeWords(value.nastavnik["#text"]),
              slotDuration: endTime.diff(startTime, "minutes"),
            };
          });

          const pieData = staffByRoom.map((value: any, i: number) => {
            return {
              x: i,
              y: calcPrecentage(value.slotDuration, timeWhenAvailable),
              label: value.nastavnik,
            };
          });
          setStatsData(pieData);
        }
      }
    };
    calculateStatsData();
  }, [calendarEvents, statsType, t]);

  const toggleStatsType = (value: string) => {
    if (statsType !== value) setStatsType(value);
  };

  return (
    <StatisticsPresenter
      toggleStatsOverlay={toggleStatsOverlay}
      toggleStatsType={toggleStatsType}
      statsType={statsType}
      statsData={statsData}
    />
  );
}
