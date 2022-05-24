export interface Actions {
  type: string;
  payload?: any;
}

export interface LoadingContextInterface {
  isLoading: boolean;
  hideLoader: () => void;
  showLoader: () => void;
}

export interface ErrorContextInterface {
  message: string;
  hideMsg: () => void;
  showMsg: (msg: string) => void;
}

export interface TranslationContextInterface {
  t: (key: string) => string;
}

export interface SettingsContextInterface {
  mode: string;
  language: string;
  toggleMode: () => void;
  changeLanguage: (lang: string) => void;
}

export interface AuthStateInterface {
  id: string | undefined;
  username: string | undefined;
  email: string | undefined;
  access_token: string | undefined;
  refresh_token: string | undefined;
}

export interface UserState {
  id: string | undefined;
  username: string | undefined;
  email: string | undefined;
  access_token: string | undefined;
  refresh_token: string | undefined;
}
