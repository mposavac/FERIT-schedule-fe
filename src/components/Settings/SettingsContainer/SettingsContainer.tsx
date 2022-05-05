import React from "react";
import { useSettings } from "../../../context";
import SettingsPresenter from "../SettingsPresenter/SettingsPresenter";

export default function SettingsContainer() {
  const { mode, language, toggleMode, changeLanguage } = useSettings();

  const handleLangChange = (e: any) => {
    if (e.target) changeLanguage(e.target.name);
    else changeLanguage(e);
  };

  return (
    <SettingsPresenter
      mode={mode}
      language={language}
      toggleMode={toggleMode}
      handleLangChange={handleLangChange}
    />
  );
}
