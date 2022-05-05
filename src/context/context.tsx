import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { initState, AuthReducer } from "./reducer";
import {
  AuthStateInterface,
  ErrorContextInterface,
  LoadingContextInterface,
  SettingsContextInterface,
  TranslationContextInterface,
} from "./types";
import * as languages from "../languages";

const AuthStateContext = createContext({
  id: undefined,
  username: undefined,
  email: undefined,
  access_token: undefined,
  refresh_token: undefined,
});

const AuthDispatchContext = createContext({});

const LoadingContext = createContext({
  isLoading: false,
  hideLoader: () => {},
  showLoader: () => {},
});

const ErrorContext = createContext({
  message: "",
  hideMsg: () => {},
  showMsg: (msg: string) => {},
});

const TranslationContext = createContext({
  t: (key: string) => key,
});

const SettingsContext = createContext({
  mode: "light",
  language: "hr",
  toggleMode: () => {},
  changeLanguage: (lang: string) => {},
});

export const useAuthState = (): AuthStateInterface => {
  const context = useContext(AuthStateContext);
  if (!context) throw new Error("There is no AuthStateContext.");
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context) return context;
};

export const useLoading = (): LoadingContextInterface => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error("There is no LoadingContext.");
  return context;
};

export const useErrorMsg = (): ErrorContextInterface => {
  const context = useContext(ErrorContext);
  if (!context) throw new Error("There is no ErrorContext.");
  return context;
};

export const useTranslation = (): TranslationContextInterface => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error("There is no TranslationContext.");
  return context;
};

export const useSettings = (): SettingsContextInterface => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("There is no SettingsContext.");
  return context;
};

export const AuthProvider = ({ children }: any) => {
  const [localUser, handleChange] = useLocalStorage("user", initState);
  const [user, dispatch] = useReducer(AuthReducer, localUser);

  useEffect(() => {
    handleChange(user);
  }, [handleChange, user]);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const LoadingProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const hideLoader = () => {
    setIsLoading(false);
  };

  const showLoader = () => {
    setIsLoading(true);
  };
  return (
    <LoadingContext.Provider value={{ isLoading, hideLoader, showLoader }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const ErrorProvider = ({ children }: any) => {
  const [message, setMessage] = useState("");

  const hideMsg = () => {
    setMessage("");
  };

  const showMsg = (msg: string) => {
    setMessage(msg);
  };
  return (
    <ErrorContext.Provider value={{ message, hideMsg, showMsg }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const SettingsProvider = ({ children }: any): any => {
  const initState = { mode: "light", language: "hr" };
  const [settings, setSettings] = useLocalStorage("settings", initState);

  const toggleMode = () => {
    let mode = settings.mode === "light" ? "dark" : "light";
    setSettings({ ...settings, mode });
  };

  const changeLanguage = (lang: string) => {
    setSettings({ ...settings, language: lang });
  };

  let t = (key: string): string => {
    return (languages as any)[settings.language || "hr"][key] || key;
  };

  return (
    <SettingsContext.Provider
      value={{ ...settings, toggleMode, changeLanguage }}
    >
      <TranslationContext.Provider value={{ t }}>
        {children}
      </TranslationContext.Provider>
    </SettingsContext.Provider>
  );
};
