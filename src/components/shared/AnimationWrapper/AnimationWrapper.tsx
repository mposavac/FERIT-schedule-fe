import React, { useEffect, useState } from "react";
import { useTranslation } from "../../../context";
import { searchIcon } from "../../../styles/assets/images";
import { AnimationWrapperProps } from "./types";
import "./AnimationWrapper.scss";

export default function AnimationWrapper({
  options,
  component1,
  component2,
  searchResults,
}: AnimationWrapperProps) {
  const [displayOption, setDisplayOption] = useState(options[0]);
  const [renderOptions, setRednerOptions] = useState({
    [options[0]]: true,
    [options[1]]: false,
  });
  const [option2] = useState(options[1]);

  const { t } = useTranslation();

  const toggleDisplayOption = () => {
    if (displayOption === options[0]) setDisplayOption(options[1]);
    else if (displayOption === options[1]) setDisplayOption(options[0]);
  };

  const handleRendering = () => {
    if (displayOption === options[0])
      setRednerOptions({ [options[0]]: true, [options[1]]: false });
    else if (displayOption === options[1])
      setRednerOptions({ [options[0]]: false, [options[1]]: true });
  };

  useEffect(() => {
    if (searchResults) setDisplayOption(option2);
  }, [searchResults, option2]);

  return (
    <div className="page__wrapper">
      {renderOptions[options[0]] && (
        <div
          className="animation__wrapper"
          style={{
            animation: `${
              displayOption === "search" ? "fadeResize" : "fadeSrhink"
            } 500ms forwards`,
          }}
          onAnimationEnd={handleRendering}
        >
          {component1}
        </div>
      )}
      {searchResults && (
        <div
          className={`animation__button animation__button__${displayOption}`}
          onClick={toggleDisplayOption}
        >
          <p>
            {t("animation.search")} <img src={searchIcon} alt="search" />
          </p>
          <p>{t("animation.results")}</p>
        </div>
      )}
      {renderOptions[options[1]] && (
        <div
          className="animation__wrapper"
          style={{
            animation: `${
              displayOption === "results" ? "fadeResize" : "fadeSrhink"
            } 500ms forwards`,
          }}
          onAnimationEnd={handleRendering}
        >
          {component2}
        </div>
      )}
    </div>
  );
}
