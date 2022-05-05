import React from "react";
import { createRoot } from "react-dom/client";
import Loading from "./components/shared/Loading/Loading";
import Error from "./components/shared/Error/Error";
import {
  AuthProvider,
  ErrorProvider,
  LoadingProvider,
  SettingsProvider,
} from "./context";
import Routes from "./routes/Routes";
import "./styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <AuthProvider>
    <LoadingProvider>
      <ErrorProvider>
        <SettingsProvider>
          <Routes />
          <Loading />
          <Error />
        </SettingsProvider>
      </ErrorProvider>
    </LoadingProvider>
  </AuthProvider>
);
