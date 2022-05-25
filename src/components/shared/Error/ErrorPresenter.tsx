import React from "react";

export default function ErrorPresenter({ message }: { message: string }) {
  return (
    <div className="error_container flex-center">
      <p>{message}</p>
    </div>
  );
}
