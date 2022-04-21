import React from "react";
import { SignUpPresenterProps } from "./types";

export default function SignUpPresenter({
  values,
  handleChange,
  submit,
}: SignUpPresenterProps) {
  return (
    <form onSubmit={submit}>
      <input
        name="username"
        type="text"
        value={values.username}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button>Create an account</button>
    </form>
  );
}
