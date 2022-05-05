import React from "react";
import { deFlag, enFlag, frFlag, hrFlag } from "../../../styles/assets/images";
import RadioButton from "../../shared/RadioButton/RadioButton";
import ToggleButton from "../../shared/ToggleButton/ToggleButton";
import { SettingsPresenterProps } from "./types";
import "./SettingsPresenter.scss";
import { useTranslation } from "../../../context";
export default function SettingsPresenter({
  mode,
  language,
  toggleMode,
  handleLangChange,
}: SettingsPresenterProps) {
  const { t } = useTranslation();
  const renderLanguageOption = (label: string, lang: string, icon: any) => {
    return (
      <div
        className={`settings__page__container__section__field__lang__container${
          language === lang ? " selected" : ""
        }`}
        onClick={() => handleLangChange(lang)}
      >
        <p>{label}</p>
        <div>
          <img src={icon} alt={lang} />
          <RadioButton
            option={lang}
            isChecked={language === lang}
            handleChange={handleLangChange}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="settings__page">
      <div className="settings__page__container">
        <div className="settings__page__container__section">
          <h3>{t("settings.user")}</h3>
          <div className="settings__page__container__section__field">
            <p>{t("username")}: user</p>
            <p>{t("e-mail")}: email</p>
          </div>
        </div>
        <div className="settings__page__container__section">
          <h3>{t("settings.mode")}</h3>
          <div className="settings__page__container__section__field">
            <ToggleButton
              value={mode}
              option1="light"
              option2="dark"
              toggleOption={toggleMode}
            />
          </div>
        </div>
        <div className="settings__page__container__section">
          <h3>{t("settings.language")}</h3>
          <div className="settings__page__container__section__field">
            <div className="settings__page__container__section__field__lang">
              {renderLanguageOption("Hrvatski", "hr", hrFlag)}
              {renderLanguageOption("English", "en", enFlag)}
              {renderLanguageOption("Deutch", "de", deFlag)}
              {renderLanguageOption("Français", "fr", frFlag)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
