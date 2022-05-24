import React from "react";
import { useAuthState, useSettings } from "../../../context";
import SettingsPresenter from "../SettingsPresenter/SettingsPresenter";

export default function SettingsContainer() {
  const { mode, language, toggleMode, changeLanguage } = useSettings();
  const user = useAuthState();

  const handleLangChange = (e: any) => {
    if (e.target) changeLanguage(e.target.name);
    else changeLanguage(e);
  };

  return (
    <SettingsPresenter
      mode={mode}
      language={language}
      user={user}
      toggleMode={toggleMode}
      handleLangChange={handleLangChange}
    />
  );
}
