import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as Routing,
} from "react-router-dom";
import LoginContainer from "../components/Auth/Login/LoginContainer/LoginContainer";
import SignUpContainer from "../components/Auth/Signup/SignUpContainer/SignUpContainer";
import PrivateRoute from "./PrivateRoute";

const Routes = () => (
  <Router>
    <Routing>
      <Route path="/" element={<PrivateRoute></PrivateRoute>} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/signup" element={<SignUpContainer />} />
      <Route path="/raspored" element={<PrivateRoute></PrivateRoute>} />
      <Route path="/prostorije" element={<PrivateRoute></PrivateRoute>} />
      <Route path="/djelatnici" element={<PrivateRoute></PrivateRoute>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routing>
  </Router>
);

export default Routes;
