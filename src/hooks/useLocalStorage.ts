import { useState, useEffect } from "react";

const getStorageValue = (key: any, defaultValue: any) => {
  if (window) {
    const savedItem = localStorage.getItem(key);
    const initialValue = savedItem ? JSON.parse(savedItem) : defaultValue;
    return initialValue;
  }
};

export const useLocalStorage = (key: any, defaultValue: any) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
