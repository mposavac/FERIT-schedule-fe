import React from "react";
import { InputSelectPresenterProps } from "../types";
import { arrowIcon } from "../../../../styles/assets/images";
import "./InputSelectPresenter.scss";
import { useTranslation } from "../../../../context";

export default function InputSelectPresenter({
  optionsList,
  selectedOption,
  toggleOpen,
  search,
  inputRef,
  handleSearch,
  handleOptionClick,
  handleOpenOptions,
  disabled,
  searchable,
  wrapperRef,
}: InputSelectPresenterProps) {
  const { t } = useTranslation();
  return (
    <div
      ref={wrapperRef}
      className={`input__select__container${disabled ? " disabled" : ""}`}
    >
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
      <ul className="select__options">
        {toggleOpen && (
          <>
            {searchable && (
              <input
                type="text"
                className={toggleOpen ? "active" : "inactive"}
                ref={inputRef}
                value={search}
                onChange={handleSearch}
                placeholder={t("search") + "..."}
                autoCorrect="off"
                autoComplete="off"
              />
            )}
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
          </>
        )}
      </ul>
    </div>
  );
}
