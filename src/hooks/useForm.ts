import { useState } from "react";
import { useValidation } from "./useValidation";

export const useForm = <S>(initialValues: S, validationSchema?: any) => {
  const [values, setValues] = useState(initialValues);
  const [validate] = useValidation(validationSchema);

  const handleChange = (e: any): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateForm = async () => {
    await validate(values);
  };

  return [values, handleChange, validateForm] as const;
};
