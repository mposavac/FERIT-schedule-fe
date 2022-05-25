import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const { pathname } = useLocation();
  let [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (pathname !== "/login" && pathname !== "/signup") setShouldRender(true);
    else setShouldRender(false);
  }, [pathname]);

  return shouldRender ? (
    <div className="footer__container flex-center">
      <p>&copy; {new Date().getFullYear()}</p>
      <p>FERIT</p>
      <span />
      <p>Matej Posavac</p>
    </div>
  ) : (
    <></>
  );
}
