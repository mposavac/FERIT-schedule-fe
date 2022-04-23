import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context";
import Routes from "./routes/Routes";
import "./styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
