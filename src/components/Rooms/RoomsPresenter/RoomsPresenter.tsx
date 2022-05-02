import React from "react";
import CalendarContainer from "../../shared/Calendar/CalendarContainer/CalendarContainer";
import RoomsFormPresenter from "./RoomsForm/RoomsForm";

import "./RoomsPresenter.scss";
import StatisticsContainer from "./Statistics/StatisticsContainer/StatisticsContainer";
import { RoomsPresenterProps } from "./types";

export default function RoomsPresenter({
  values,
  calendarEvents,
  handleFormChange,
  handleSearch,
  toggleStatsOverlay,
  isStatsOpen,
}: RoomsPresenterProps) {
  //TODO: Implement real data
  const buildings = [
    { text: "Trpimirova", value: "0" },
    { text: "Kampus", value: "1" },
  ];

  //TODO: Implement real data
  const rooms = [
    { text: "K2-1", value: "0" },
    { text: "K2-2", value: "1" },
    { text: "K2-3", value: "2" },
    { text: "K2-4", value: "3" },
  ];

  return (
    <div className="rooms">
      <div className="rooms__form__container">
        <RoomsFormPresenter
          values={values}
          handleFormChange={handleFormChange}
          handleSearch={handleSearch}
          buildingOptions={buildings}
          roomsOptions={rooms}
          isThereCalendarEvents={calendarEvents ? true : false}
          toggleStatsOverlay={toggleStatsOverlay}
        />
      </div>
      <CalendarContainer calendarEvents={calendarEvents} />
      {isStatsOpen && (
        <StatisticsContainer
          toggleStatsOverlay={toggleStatsOverlay}
          calendarEvents={calendarEvents}
        />
      )}
    </div>
  );
}
