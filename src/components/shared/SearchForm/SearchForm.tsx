import React from "react";
import { useTranslation } from "../../../context";
import { SearchFormProps } from "./types";

import "./SearchForm.scss";

export default function SearchForm({
  searchText,
  date,
  handleFormChange,
  handleSearch,
  additionalInputFields,
  additionalButtons,
}: SearchFormProps) {
  const { t } = useTranslation();
  return (
    <div className="search__form__container__content">
      <h3>{t(searchText)}</h3>
      <div className="search__form__container__content__field">
        <label>{t(searchText)}</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e: any) => handleFormChange(e)}
        />
      </div>
      {additionalInputFields}
      <button onClick={handleSearch}>{t("search")}</button>
      {additionalButtons}
    </div>
  );
}
