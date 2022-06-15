import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "../../../context";
import {
  feritLogo,
  feritLogoBijeli,
  profilePlaceholder,
} from "../../../styles/assets/images";
import "./NavigationPresenter.scss";
import { NavigationPresenterProps } from "../types";

export default function NavigationPresenter({
  handleLogout,
  username,
  mode,
}: NavigationPresenterProps) {
  const { t } = useTranslation();
  return (
    <div className="navigation__container">
      <div className="navigation__container__left flex-center">
        <NavLink to="/">
          <img src={mode === "light" ? feritLogo : feritLogoBijeli} alt="" />
        </NavLink>
        <span />
        <div className="link__container">
          <NavLink to="prostorije">{t("navigation.rooms")}</NavLink>
        </div>
        <span />
        <div className="link__container">
          <NavLink to="djelatnici">{t("navigation.staff")}</NavLink>
        </div>
        <span />
        <div className="link__container">
          <NavLink to="kalendar">{t("navigation.calendar")}</NavLink>
        </div>
        <span />
      </div>
      <div className="navigation__container__right">
        <div className="dropdown__menu">
          <img src={profilePlaceholder} alt="" />
          <p>{username}</p>
          <div className="dropdown__menu__content">
            <Link to="/postavke">{t("settings")}</Link>
            <p onClick={handleLogout}>{t("logout")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
