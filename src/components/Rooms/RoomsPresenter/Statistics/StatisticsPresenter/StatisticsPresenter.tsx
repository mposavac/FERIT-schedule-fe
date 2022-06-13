import React from "react";
import { VictoryLabel, VictoryPie, VictoryTooltip } from "victory";
import ToggleButton from "../../../../shared/ToggleButton/ToggleButton";
import { StatisticsPresenterProps } from "../../../types";
import "./StatisticsPresenter.scss";

export default function StatisticsPresenter({
  statsData,
  statsType,
  toggleStatsType,
}: StatisticsPresenterProps) {
  const calculateLabelSize = (): number => {
    if (statsData.length < 5) return 14;
    if (statsData.length >= 5 && statsData.length < 8) return 12;
    else return 10;
  };

  const colorScale = () => {
    if (statsData.length > 2)
      return [
        "#eb4d4b",
        "#7ed6df",
        "#dff9fb",
        "#f9ca24",
        "#30336b",
        "#badc58",
        "#ffbe76",
      ];
    else return ["#eb4d4b", "#2ecc71"];
  };

  return (
    <div className="dialog__wrapper__container__content flex-center">
      <div className="dialog__wrapper__container__content__pie__container">
        {statsData && (
          <VictoryPie
            data={statsData}
            colorScale={colorScale()}
            style={{ labels: { fontSize: calculateLabelSize() } }}
            startAngle={60}
            endAngle={420}
            labelComponent={
              statsData.length > 13 ? (
                <VictoryTooltip
                  flyoutStyle={{ stroke: "tomato", strokeWidth: 1 }}
                />
              ) : (
                <VictoryLabel />
              )
            }
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
