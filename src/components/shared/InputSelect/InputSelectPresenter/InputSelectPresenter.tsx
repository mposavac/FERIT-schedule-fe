import React from "react";
import { InputSelectPresenterProps } from "../types";
import { arrowIcon } from "../../../../styles/assets/images";
import "./InputSelectPresenter.scss";

export default function InputSelectPresenter({
  optionsList,
  selectedOption,
  toggleOpen,
  handleOptionClick,
  handleOpenOptions,
  disabled,
}: InputSelectPresenterProps) {
  return (
    <div className={`input__select__container${disabled ? " disabled" : ""}`}>
      <div
        className="input__select__container__selected"
        onClick={handleOpenOptions}
      >
        <p>{selectedOption.text}</p>
        <img
          className={toggleOpen ? "arrow-up" : "arrow-down"}
          src={arrowIcon}
          alt=""
        />
      </div>
      {toggleOpen && (
        <ul className="select__options">
          {optionsList.map((option, i) => {
            return (
              <li
                key={option.value + i}
                data-name={JSON.stringify(option)}
                onClick={handleOptionClick}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
