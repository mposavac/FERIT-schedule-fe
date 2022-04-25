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
