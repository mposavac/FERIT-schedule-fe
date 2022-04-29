import React from "react";
import { VictoryPie } from "victory";
import { crossIcon } from "../../../../styles/assets/images";
import { StatisticsOverlayProps } from "../types";
import "./StatisticsOverlay.scss";

export default function StatisticsOverlay({
  toggleStatsOverlay,
  data,
}: StatisticsOverlayProps) {
  return (
    <div className="statistics__overlay__container">
      <div className="statistics__overlay__container__close__container">
        <img src={crossIcon} alt="" onClick={toggleStatsOverlay} />
      </div>
      <div className="statistics__overlay__container__pie__container">
        <VictoryPie
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          animate={{
            duration: 500,
          }}
          data={data}
        />
      </div>
    </div>
  );
}
