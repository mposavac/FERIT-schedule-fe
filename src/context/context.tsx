import { useReducer, createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { initState, AuthReducer } from "./reducer";

const AuthStateContext = createContext({});
const AuthDispatchContext = createContext({});

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context) return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context) return context;
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
