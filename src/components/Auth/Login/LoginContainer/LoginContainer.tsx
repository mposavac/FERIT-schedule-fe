import React from "react";
import { loginUser, useAuthDispatch } from "../../../../context";
import { LoginForm } from "../../../../hooks/types";
import { useForm } from "../../../../hooks/useForm";
import AuthBackground from "../../Shared/AuthBackground";
import LoginPresenter from "../LoginPresenter/LoginPresenter";

export default function LoginContainer() {
  const [values, handleChange] = useForm<LoginForm>({
    email: "",
    password: "",
  });
  const dispatch = useAuthDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(dispatch, values);
  };

  return (
    <AuthBackground>
      <LoginPresenter
        values={values}
        handleChange={handleChange}
        submit={onSubmit}
      />
    </AuthBackground>
  );
}
