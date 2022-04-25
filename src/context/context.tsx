import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { initState, AuthReducer } from "./reducer";
import { ErrorContextInterface, LoadingContextInterface } from "./types";

const AuthStateContext = createContext({});
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

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context) return context;
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
