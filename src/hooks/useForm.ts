import { useState } from "react";

export const useForm = <S>(initialValues: S) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: any): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return [values, handleChange] as const;
};
