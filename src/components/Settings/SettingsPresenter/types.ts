export interface SettingsPresenterProps {
  mode: string;
  language: string;
  toggleMode: () => void;
  handleLangChange: (e: any) => void;
}
