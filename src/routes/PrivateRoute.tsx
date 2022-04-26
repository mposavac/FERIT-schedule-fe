import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../context";

const PrivateRoute = ({ children }: any) => {
  let user = useAuthState();
  let isAuthenticated = user && user.username;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
