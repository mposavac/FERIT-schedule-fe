import React from "react";
import "./Loading.scss";
import LoadingPresenter from "./LoadingPresenter";

export default function Loading() {
  return (
    <div className="loading__page">
      <LoadingPresenter />
      <LoadingPresenter />
    </div>
  );
}
