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
  buildingsOptions,
  roomsOptions,
}: RoomsPresenterProps) {
  return (
    <div className="rooms">
      <div className="rooms__form__container">
        <RoomsFormPresenter
          values={values}
          handleFormChange={handleFormChange}
          handleSearch={handleSearch}
          buildingsOptions={buildingsOptions}
          roomsOptions={roomsOptions}
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
