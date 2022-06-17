import React, { useEffect, useRef, useState } from "react";
import { includes } from "lodash";
import InputSelectPresenter from "../InputSelectPresenter/InputSelectPresenter";
import { InputSelectContainerProps, InputSelectOption } from "../types";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

const InputSelectContainer = ({
  name,
  optionsList,
  selectedOption,
  onChange,
  disabled,
  searchable,
}: InputSelectContainerProps) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [options, setOptions] = useState<InputSelectOption[]>([]);
  const [search, setSearch] = useState("");
  const [originalOptions, setOriginalOptions] = useState<InputSelectOption[]>(
    []
  );
  const inputRef = useRef<HTMLInputElement>();
  const wrapperRef = useOutsideClick(() => {
    setToggleOpen(false);
  });

  const handleOptionClick = (e: any) => {
    const option = JSON.parse(e.target.getAttribute("data-name"));
    onChange({ [name]: option });
    setToggleOpen(!toggleOpen);
    setOptions(originalOptions);
  };

  const handleOpenOptions = () => {
    if (!disabled) {
      setToggleOpen(!toggleOpen);
    }
  };

  const handleSearch = (e: any) => {
    setSearch(e?.target?.value);
    const newOptions = originalOptions.filter((option) =>
      includes(option.text.toLowerCase(), e?.target?.value?.toLowerCase())
    );
    setOptions(newOptions);
  };

  useEffect(() => {
    const sorted = optionsList.sort((a, b) => a.text.localeCompare(b.text));
    setOptions(sorted);
    setOriginalOptions(sorted);
  }, [optionsList]);

  useEffect(() => {
    if (toggleOpen) {
      setSearch("");
      setOptions(originalOptions);
      inputRef?.current?.focus();
    }
  }, [toggleOpen, originalOptions]);

  return (
    <InputSelectPresenter
      optionsList={options}
      selectedOption={selectedOption}
      toggleOpen={toggleOpen}
      search={search}
      inputRef={inputRef}
      handleSearch={handleSearch}
      handleOptionClick={handleOptionClick}
      handleOpenOptions={handleOpenOptions}
      wrapperRef={wrapperRef}
      disabled={disabled}
      searchable={searchable}
    />
  );
};

export { InputSelectContainer as InputSelect };
