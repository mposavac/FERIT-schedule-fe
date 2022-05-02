import React from "react";
import { VictoryPie } from "victory";
import { crossIcon } from "../../../../../styles/assets/images";
import ToggleButton from "../../../../shared/ToggleButton/ToggleButton";
import { StatisticsPresenterProps } from "../../types";
import "./StatisticsPresenter.scss";

export default function StatisticsPresenter({
  toggleStatsOverlay,
  toggleStatsType,
  statsType,
  statsData,
}: StatisticsPresenterProps) {
  return (
    <div className="statistics__overlay__container">
      <div className="statistics__overlay__container__close__container">
        <img src={crossIcon} alt="" onClick={toggleStatsOverlay} />
      </div>
      <div className="statistics__overlay__container__pie__container">
        {statsData && (
          <VictoryPie
            data={statsData}
            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            animate={{
              duration: 200,
            }}
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
