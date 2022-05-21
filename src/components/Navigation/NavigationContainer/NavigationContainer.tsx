import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  logoutUser,
  useAuthDispatch,
  useAuthState,
  useSettings,
} from "../../../context";
import NavigationPresenter from "../NavigationPresenter/NavigationPresenter";

export default function NavigationContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const [shouldRender, setShouldRender] = useState(false);
  let user = useAuthState();
  const { mode } = useSettings();

  useEffect(() => {
    if (pathname !== "/login" && pathname !== "/signup") setShouldRender(true);
    else setShouldRender(false);
  }, [pathname]);

  const logout = () => {
    const { id, access_token } = user;
    logoutUser(dispatch, { id, access_token }).then(() => navigate("/login"));
  };

  return shouldRender ? (
    <NavigationPresenter
      handleLogout={logout}
      username={user.username}
      mode={mode}
    />
  ) : (
    <></>
  );
}
