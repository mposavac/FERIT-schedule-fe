import React, { useEffect, useState } from "react";
import InputSelectPresenter from "../InputSelectPresenter/InputSelectPresenter";
import { InputSelectContainerProps, InputSelectOption } from "../types";

const InputSelectContainer = ({
  name,
  optionsList,
  selectedOption,
  onChange,
  disabled,
}: InputSelectContainerProps) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [options, setOptions] = useState<InputSelectOption[]>([]);

  const handleOptionClick = (e: any) => {
    const option = JSON.parse(e.target.getAttribute("data-name"));
    onChange({ [name]: option });
    setToggleOpen(!toggleOpen);
  };

  const handleOpenOptions = () => {
    if (!disabled) setToggleOpen(!toggleOpen);
  };

  useEffect(() => {
    setOptions(optionsList.sort((a, b) => a.text.localeCompare(b.text)));
  }, [optionsList]);

  return (
    <InputSelectPresenter
      optionsList={options}
      selectedOption={selectedOption}
      toggleOpen={toggleOpen}
      handleOptionClick={handleOptionClick}
      handleOpenOptions={handleOpenOptions}
      disabled={disabled}
    />
  );
};

export { InputSelectContainer as InputSelect };
