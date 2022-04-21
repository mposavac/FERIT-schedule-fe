import React from "react";
import { LoginPresenterProps } from "./types";

export default function LoginPresenter({
  values,
  handleChange,
  submit,
}: LoginPresenterProps) {
  return (
    <form onSubmit={submit}>
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
      <button>Login</button>
    </form>
  );
}
