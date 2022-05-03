import React, { useState } from "react";
import InputSelectPresenter from "../InputSelectPresenter/InputSelectPresenter";
import { InputSelectContainerProps } from "../types";

const InputSelectContainer = ({
  name,
  optionsList,
  selectedOption,
  onChange,
  disabled,
}: InputSelectContainerProps) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleOptionClick = (e: any) => {
    const option = JSON.parse(e.target.getAttribute("data-name"));
    onChange({ [name]: option });
    setToggleOpen(!toggleOpen);
  };

  const handleOpenOptions = () => {
    if (!disabled) setToggleOpen(!toggleOpen);
  };

  return (
    <InputSelectPresenter
      optionsList={optionsList}
      selectedOption={selectedOption}
      toggleOpen={toggleOpen}
      handleOptionClick={handleOptionClick}
      handleOpenOptions={handleOpenOptions}
      disabled={disabled}
    />
  );
};

export { InputSelectContainer as InputSelect };
