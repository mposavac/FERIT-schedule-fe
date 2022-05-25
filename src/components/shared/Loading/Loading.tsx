import React from "react";
import { useLoading } from "../../../context/context";
import "./Loading.scss";
import LoadingPresenter from "./LoadingPresenter";

export default function Loading(props: any) {
  const { isLoading } = useLoading();
  return isLoading ? (
    <div className="loading__page flex-center">
      <LoadingPresenter />
      <LoadingPresenter />
    </div>
  ) : (
    <></>
  );
}
