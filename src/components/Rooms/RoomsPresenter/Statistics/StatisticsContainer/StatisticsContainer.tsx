import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "../../../../../context";
import { TimeSlots } from "../../../../../interfaces/responses.type";
import {
  StaffTimeSlotData,
  StatisticsContainerProps,
  StatisticsData,
} from "../../types";
import StatisticsPresenter from "../StatisticsPresenter/StatisticsPresenter";

export default function StatisticsContainer({
  toggleStatsOverlay,
  calendarEvents,
}: StatisticsContainerProps) {
  const [statsData, setStatsData] = useState<StatisticsData[]>([]);
  const [statsType, setStatsType] = useState<string>("availability");
  const { t } = useTranslation();

  useEffect(() => {
    const calculateStatsData = () => {
      const calcPrecentage = (value1: number, value2: number) => {
        return parseFloat((value1 / value2).toFixed(2)) * 100;
      };

      const capitalizeWords = (str: string) => {
        if (str) {
          let arr = str.split(" ");
          for (let i = 0; i < arr.length; i++) {
            let arrDashed = arr[i].split("-");
            if (arrDashed.length > 1) {
              for (let j = 0; j < arrDashed.length; j++) {
                arrDashed[j] =
                  arrDashed[j].charAt(0).toUpperCase() +
                  arrDashed[j].slice(1).toLocaleLowerCase();
              }
              arr[i] = arrDashed.join("-");
            } else {
              arr[i] =
                arr[i].charAt(0).toUpperCase() +
                arr[i].slice(1).toLocaleLowerCase();
            }
          }
          return arr.join(" ");
        } else return t("unknown");
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
          const staffByRoom = Array.from(
            calendarEventsArr
              .map((value: TimeSlots) => {
                const startTime = moment(value["pocetak"], "HH:mm");
                const endTime = moment(value["kraj"], "HH:mm");
                return {
                  nastavnik: capitalizeWords(value.nastavnik["#text"]),
                  slotDuration: Math.floor(endTime.diff(startTime, "minutes")),
                };
              })
              .reduce(
                (a, b) =>
                  a.set(
                    b.nastavnik,
                    (a.get(b.nastavnik) || 0) + b.slotDuration
                  ),
                new Map()
              )
              .entries(),
            (entry: any) => ({
              nastavnik: entry[0],
              slotDuration: entry[1],
            })
          );

          const pieData = staffByRoom.map(
            (value: StaffTimeSlotData, i: number) => {
              return {
                x: i,
                y: calcPrecentage(value.slotDuration, timeWhenAvailable),
                label: value.nastavnik,
              };
            }
          );
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
