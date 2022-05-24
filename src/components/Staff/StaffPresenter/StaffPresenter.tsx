import React from "react";
import StaffForm from "./StaffForm/StaffForm";
import { StaffPresenterProps } from "./types";
import "./StaffPresenter.scss";
import CalendarContainer from "../../shared/Calendar/CalendarContainer/CalendarContainer";
import DialogContainer from "../../shared/Dialog/DialogContainer/DialogContainer";
import { useTranslation } from "../../../context";

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
  const { t } = useTranslation();
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
      <DialogContainer
        isOpen={isStaffInfoOpen && selectedEmployee ? true : false}
        toggleDialog={toggleStaffInfo}
        height={"20vh"}
      >
        <div className="dialog__wrapper__container__content staff__dialog">
          <p>
            {t("form.employee")}:
            <span>
              {selectedEmployee?.ime}, {selectedEmployee?.radnoMjesto}
            </span>
          </p>
          <p>
            {t("e-mail")}: <span>{selectedEmployee?.email}</span>
          </p>
          <p>
            {t("form.staff.department")}:
            <span>{selectedEmployee?.katedra}</span>
          </p>
          <p>
            {t("form.staff.office")}: <span>{selectedEmployee?.ured}</span>
          </p>
        </div>
      </DialogContainer>
    </div>
  );
}
