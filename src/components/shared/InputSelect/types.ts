export interface InputSelectOption {
  text: string;
  value: string;
}

export interface InputSelectPresenterProps {
  optionsList: InputSelectOption[];
  selectedOption: InputSelectOption;
  toggleOpen: boolean;
  search: string;
  inputRef: any;
  handleSearch: (e: any) => void;
  handleOptionClick: (e: any) => void;
  handleOpenOptions: () => void;
  disabled?: boolean;
  searchable?: boolean;
}

export interface InputSelectContainerProps {
  name: string;
  optionsList: InputSelectOption[];
  selectedOption: InputSelectOption;
  onChange: (e: any) => void;
  disabled?: boolean;
  searchable?: boolean;
}
