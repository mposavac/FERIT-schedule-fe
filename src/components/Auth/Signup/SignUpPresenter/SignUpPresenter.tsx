import React from "react";
import { SignUpPresenterProps } from "./types";

export default function SignUpPresenter({
  values,
  handleChange,
  submit,
}: SignUpPresenterProps) {
  return (
    <form onSubmit={submit}>
      <h2>Sign Up</h2>
      <div className="inputs__container">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
        />
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
      <button>Create an account</button>
    </form>
  );
}
