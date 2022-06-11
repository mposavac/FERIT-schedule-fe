import React, { useEffect, useState } from "react";
import { useTranslation } from "../../../../context";
import {
  StaffTimeSlotData,
  StatisticsProps,
  StatisticsData,
} from "../../types";
import { VictoryPie } from "victory";
import ToggleButton from "../../../shared/ToggleButton/ToggleButton";
import { calcPrecentage, calcStatsData } from "../../../../utils/functions";
import "./Statistics.scss";

export default function Statistics({ calendarEvents }: StatisticsProps) {
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
    <div className="dialog__wrapper__container__content flex-center">
      <div className="dialog__wrapper__container__content__pie__container">
        {statsData && (
          <VictoryPie
            data={statsData}
            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          />
        )}
      </div>
      <ToggleButton
        value={statsType}
        option1="availability"
        option2="staff"
        toggleOption={toggleStatsType}
      />
    </div>
  );
}
