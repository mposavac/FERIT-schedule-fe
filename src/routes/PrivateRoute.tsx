import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PrivateRoute = ({ children }: any) => {
  let [user] = useLocalStorage("user", null);
  let isAuthenticated = user && user.user;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
