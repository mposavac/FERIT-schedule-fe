import React from "react";
import { useAuthDispatch } from "../../../../context";
import { SignUpForm } from "../../../../hooks/types";
import { useForm } from "../../../../hooks/useForm";
import AuthBackground from "../../Shared/AuthBackground";
import SignUpPresenter from "../SignUpPresenter/SignUpPresenter";

export default function SignUpContainer() {
  const [values, handleChange] = useForm<SignUpForm>({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useAuthDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //SIGNUP REQ
  };
  return (
    <AuthBackground>
      <SignUpPresenter
        values={values}
        handleChange={handleChange}
        submit={onSubmit}
      />
    </AuthBackground>
  );
}
