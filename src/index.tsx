import React from "react";
import { createRoot } from "react-dom/client";
import Loading from "./components/shared/Loading/Loading";
import Error from "./components/shared/Error/Error";
import { AuthProvider, ErrorProvider, LoadingProvider } from "./context";
import Routes from "./routes/Routes";
import "./styles/index.scss";
import { TranslationProvider } from "./context/context";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <AuthProvider>
    <LoadingProvider>
      <ErrorProvider>
        <TranslationProvider>
          <Routes />
          <Loading />
          <Error />
        </TranslationProvider>
      </ErrorProvider>
    </LoadingProvider>
  </AuthProvider>
);
