import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as Routing,
} from "react-router-dom";
import LoginContainer from "../components/Auth/Login/LoginContainer/LoginContainer";
import SignUpContainer from "../components/Auth/Signup/SignUpContainer/SignUpContainer";
import HomeContainer from "../components/Home/HomeContainer/HomeContainer";
import NavigationContainer from "../components/Navigation/NavigationContainer/NavigationContainer";
import RoomsContainer from "../components/Rooms/RoomsContainer/RoomsContainer";
import SchedulerContainer from "../components/Scheduler/SchedulerContainer/SchedulerContainer";
import SettingsContainer from "../components/Settings/SettingsContainer/SettingsContainer";
import Footer from "../components/shared/Footer/Footer";
import StaffContainer from "../components/Staff/StaffContainer/StaffContainer";
import { useSettings } from "../context";
import { useRefreshToken } from "../hooks/useRefreshToken";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  const { mode } = useSettings();
  const [axios] = useRefreshToken();

  useEffect(() => {
    if (mode === "light") document.body.classList.add("theme-light");
    else document.body.classList.add("theme-dark");

    return () => {
      if (mode === "light") document.body.classList.remove("theme-light");
      else document.body.classList.remove("theme-dark");
    };
  }, [mode]);

  return (
    <Router>
      <NavigationContainer />
      <Routing>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/signup" element={<SignUpContainer />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/prostorije"
          element={
            <PrivateRoute>
              <RoomsContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/postavke"
          element={
            <PrivateRoute>
              <SettingsContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/djelatnici"
          element={
            <PrivateRoute>
              <StaffContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/planer"
          element={
            <PrivateRoute>
              <SchedulerContainer />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routing>
      <Footer />
    </Router>
  );
};

export default Routes;
