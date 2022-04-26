import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { feritLogo, profilePlaceholder } from "../../../styles/assets/images";
import "./NavigationPresenter.scss";
import { NavigationPresenterProps } from "./types";

export default function NavigationPresenter({
  handleLogout,
  username,
}: NavigationPresenterProps) {
  return (
    <div className="navigation__container">
      <div className="navigation__container__left">
        <img src={feritLogo} alt="" />
        <span />
        <div className="link__container">
          <NavLink to="prostorije">Prostorije</NavLink>
        </div>
        <span />
        <div className="link__container">
          <NavLink to="djelatnici">Djelatnici</NavLink>
        </div>
        <span />
        <div className="link__container">
          <NavLink to="kalendar">Kalendar</NavLink>
        </div>
        <span />
      </div>
      <div className="navigation__container__right">
        <div className="dropdown__menu">
          <img src={profilePlaceholder} alt="" />
          <p>{username}</p>
          <div className="dropdown__menu__content">
            <Link to="/">Postavke</Link>
            <p onClick={handleLogout}>Odjava</p>
          </div>
        </div>
      </div>
    </div>
  );
}
