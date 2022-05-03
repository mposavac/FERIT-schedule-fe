import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as Routing,
} from "react-router-dom";
import LoginContainer from "../components/Auth/Login/LoginContainer/LoginContainer";
import SignUpContainer from "../components/Auth/Signup/SignUpContainer/SignUpContainer";
import NavigationContainer from "../components/Navigation/NavigationContainer/NavigationContainer";
import RoomsContainer from "../components/Rooms/RoomsContainer/RoomsContainer";
import Footer from "../components/shared/Footer/Footer";
import PrivateRoute from "./PrivateRoute";

const Routes = () => (
  <Router>
    <NavigationContainer />
    <Routing>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/signup" element={<SignUpContainer />} />
      <Route path="/" element={<PrivateRoute></PrivateRoute>} />
      <Route path="/kalendar" element={<PrivateRoute></PrivateRoute>} />
      <Route
        path="/prostorije"
        element={
          <PrivateRoute>
            <RoomsContainer />
          </PrivateRoute>
        }
      />
      <Route path="/djelatnici" element={<PrivateRoute></PrivateRoute>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routing>
    <Footer />
  </Router>
);

export default Routes;
