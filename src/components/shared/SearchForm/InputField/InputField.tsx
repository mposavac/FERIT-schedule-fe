import React from "react";
import { useTranslation } from "../../../../context";
import { InputFieldProps } from "../types";

export default function InputField({
  name,
  type,
  value,
  handleChange,
  customField,
  ...props
}: InputFieldProps) {
  const { t } = useTranslation();
  return (
    <div className="search__form__container__content__field">
      {customField ? (
        <>
          <label>{t(`form.${name}`)}</label>
          {customField}
        </>
      ) : (
        <>
          <label>{t(`form.${name}`)}</label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange ? (e: any) => handleChange(e) : undefined}
            {...props}
          />
        </>
      )}
    </div>
  );
}
