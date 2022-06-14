import React, { useEffect, useState } from "react";
import { useTranslation } from "../../../../../context";
import { calcPrecentage, calcStatsData } from "../../../../../utils/functions";
import {
  StaffTimeSlotData,
  StatisticsContainerProps,
  StatisticsData,
} from "../../../types";
import StatisticsPresenter from "../StatisticsPresenter/StatisticsPresenter";

export default function StatisticsContainer({
  calendarEvents,
}: StatisticsContainerProps) {
  const [statsData, setStatsData] = useState<StatisticsData[]>([]);
  const [statsType, setStatsType] = useState<string>("availability");
  const { t } = useTranslation();

  useEffect(() => {
    const calculateStatsData = () => {
      if (calendarEvents) {
        const timeWhenAvailable = 825 * calendarEvents.length;

        if (statsType === "availability") {
          const [roomAvailable, roomUnvailable] = calcStatsData(
            timeWhenAvailable,
            calendarEvents,
            statsType
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
          pieData.sort((a, b) => a.y - b.y);
          setStatsData(pieData);
        } else if (statsType === "staff") {
          const [staffRoomUsage, roomInUsageTime] = calcStatsData(
            timeWhenAvailable,
            calendarEvents,
            "staff"
          );
          const pieData = staffRoomUsage.map(
            (value: StaffTimeSlotData, i: number) => {
              const precentage = calcPrecentage(
                value.slotDuration,
                roomInUsageTime
              );
              return {
                x: i,
                y: precentage,
                label: `${value.nastavnik} ${precentage}%`,
              };
            }
          );
          pieData.sort((a: any, b: any) => a.y - b.y);
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
      statsData={statsData}
      statsType={statsType}
      toggleStatsType={toggleStatsType}
    />
  );
}
