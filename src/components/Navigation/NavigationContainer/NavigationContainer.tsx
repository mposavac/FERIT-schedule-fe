import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logoutUser, useAuthDispatch } from "../../../context";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import NavigationPresenter from "../NavigationPresenter/NavigationPresenter";

export default function NavigationContainer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const [shouldRender, setShouldRender] = useState(false);
  let [user] = useLocalStorage("user", null);

  useEffect(() => {
    console.log(pathname);
    if (pathname !== "/login" && pathname !== "/signup") setShouldRender(true);
  }, [pathname]);

  const logout = () => {
    logoutUser(dispatch).then(() => navigate("/login"));
  };

  return shouldRender ? (
    <NavigationPresenter handleLogout={logout} username={user.username} />
  ) : (
    <></>
  );
}
