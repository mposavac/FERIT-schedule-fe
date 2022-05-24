import React from "react";
import { useTranslation } from "../../../context";
import { searchIcon } from "../../../styles/assets/images";
import CalendarContainer from "../../shared/Calendar/CalendarContainer/CalendarContainer";
import { SchedulerPresenterProps } from "../types";
import SchedulerForm from "./SchedulerForm/SchedulerForm";
import "./SchedulerPresenter.scss";

export default function SchedulerPresenter({
  values,
  availability,
  displayOption,
  toggleDisplayOption,
  handleFormChange,
  handleSearch,
}: SchedulerPresenterProps) {
  const { t } = useTranslation();
  return (
    <div className="scheduler">
      {displayOption === "search" && (
        <SchedulerForm
          values={values}
          handleFormChange={handleFormChange}
          handleSearch={handleSearch}
        />
      )}
      {availability && (
        <div
          className={`scheduler__button scheduler__${displayOption}`}
          onClick={toggleDisplayOption}
        >
          <p>
            {t("scheduler.search")} <img src={searchIcon} alt="" />
          </p>
          <p>{t("scheduler.results")}</p>
        </div>
      )}
      {displayOption === "results" && (
        <div className="scheduler__container">
          <div className="scheduler__container__available__rooms">
            <h4>Dostupne prostorije: </h4>
            <div className="scheduler__container__available__rooms__content">
              {availability?.map((el: any, i: number) => (
                <p key={i}>{el.name}</p>
              ))}
            </div>
          </div>
          <div className="scheduler__container__calendar__wrapper">
            {availability?.map((el: any, i: number) => (
              <div
                key={i}
                className="scheduler__container__calendar__wrapper__container"
              >
                <div className="scheduler__container__calendar__wrapper__container__title">
                  <h3>{el.name}</h3>
                </div>
                <CalendarContainer
                  calendarEvents={{
                    date: new Date(),
                    timeSlots: el.unavailableSlots || [],
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
