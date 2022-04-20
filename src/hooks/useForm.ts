import { useState } from "react";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return [values, handleChange];
};
