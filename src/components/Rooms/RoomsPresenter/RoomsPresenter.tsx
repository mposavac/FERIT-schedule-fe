import React from "react";
import CalendarContainer from "../../shared/Calendar/CalendarContainer/CalendarContainer";
import DialogContainer from "../../shared/Dialog/DialogContainer/DialogContainer";
import RoomsForm from "./RoomsForm/RoomsForm";
import Statistics from "./Statistics/Statistics";
import { RoomsPresenterProps } from "../types";
import AnimationWrapper from "../../shared/AnimationWrapper/AnimationWrapper";

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
    <div className="page__wrapper">
      <AnimationWrapper
        options={["search", "results"]}
        searchResults={calendarEvents}
        component1={
          <div className="rooms__form__container">
            <RoomsForm
              values={values}
              handleFormChange={handleFormChange}
              handleSearch={handleSearch}
              buildingsOptions={buildingsOptions}
              roomsOptions={roomsOptions}
              isThereCalendarEvents={calendarEvents ? true : false}
              toggleStatsOverlay={toggleStatsOverlay}
            />
          </div>
        }
        component2={<CalendarContainer calendarEvents={calendarEvents} />}
      />
      <DialogContainer
        isOpen={isStatsOpen}
        toggleDialog={toggleStatsOverlay}
        height={"70vh"}
        width={"75%"}
      >
        <Statistics calendarEvents={calendarEvents} />
      </DialogContainer>
    </div>
  );
}
