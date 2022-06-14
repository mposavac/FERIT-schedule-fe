import React from "react";
import AnimationWrapper from "../../shared/AnimationWrapper/AnimationWrapper";
import CalendarContainer from "../../shared/Calendar/CalendarContainer/CalendarContainer";
import { SchedulerPresenterProps } from "../types";
import SchedulerForm from "./SchedulerForm/SchedulerForm";
import "./SchedulerPresenter.scss";

export default function SchedulerPresenter({
  values,
  availability,
  handleFormChange,
  handleSearch,
}: SchedulerPresenterProps) {
  return (
    <AnimationWrapper
      options={["search", "results"]}
      searchResults={availability}
      component1={
        <SchedulerForm
          values={values}
          handleFormChange={handleFormChange}
          handleSearch={handleSearch}
        />
      }
      component2={
        <>
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
                <div className="scheduler__container__calendar__wrapper__container__title flex-center">
                  <h3>{el.name}</h3>
                </div>
                <CalendarContainer
                  calendarEvents={[
                    {
                      date: el.date,
                      timeSlots: el.unavailableSlots || [],
                    },
                  ]}
                  singleDayView={true}
                />
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}
