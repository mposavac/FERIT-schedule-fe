import React from "react";
import { LoginPresenterProps } from "./types";

export default function LoginPresenter({
  values,
  handleChange,
  submit,
}: LoginPresenterProps) {
  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <div className="inputs__container">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button>Login</button>
    </form>
  );
}
