import React from "react";
import { useTranslation } from "../../../context";
import { SearchFormProps } from "./types";
import "./SearchForm.scss";
import { searchIcon } from "../../../styles/assets/images";
import Button from "../Button/Button";

export default function SearchForm({
  searchText,
  handleSearch,
  additionalButtons,
  children,
}: SearchFormProps) {
  const { t } = useTranslation();
  return (
    <div className="search__form__container__content">
      <h3>{t(searchText)}</h3>
      {children}
      <Button text="search" icon={searchIcon} onClick={handleSearch} />
      {additionalButtons}
    </div>
  );
}
