import { UserState } from "../../context/types";

export interface SettingsPresenterProps {
  mode: string;
  language: string;
  user: UserState;
  toggleMode: () => void;
  handleLangChange: (e: any) => void;
}
