import React from "react";
import StaffForm from "./StaffForm/StaffForm";
import { StaffPresenterProps } from "./types";
import "./StaffPresenter.scss";
import CalendarContainer from "../../shared/Calendar/CalendarContainer/CalendarContainer";
import StaffInfoOverlay from "./StaffInfoOverlay/StaffInfoOverlay";

export default function StaffPresenter({
  values,
  calendarEvents,
  handleFormChange,
  handleSearch,
  toggleStaffInfo,
  staffOptions,
  selectedEmployee,
  isStaffInfoOpen,
}: StaffPresenterProps) {
  return (
    <div className="staff">
      <div className="staff__form__container">
        <StaffForm
          values={values}
          handleFormChange={handleFormChange}
          handleSearch={handleSearch}
          staffOptions={staffOptions}
          toggleStaffInfo={toggleStaffInfo}
          isThereCalendarEvents={calendarEvents ? true : false}
        />
      </div>
      <CalendarContainer calendarEvents={calendarEvents} displayRoom={true} />
      {isStaffInfoOpen && (
        <StaffInfoOverlay
          selectedEmployee={selectedEmployee}
          toggleStaffInfo={toggleStaffInfo}
        />
      )}
    </div>
  );
}
