import React from "react";

export default function LoadingPresenter() {
  return (
    <div className="loading__container">
      <div className="loading__container__rectangle">
        <div>
          <span className="loading__container__rectangle__left loading__container__rectangle__h6" />
          <span className="loading__container__rectangle__right loading__container__rectangle__h3" />
        </div>
      </div>

      <div className="loading__container__rectangle">
        <div>
          <span className="loading__container__rectangle__left loading__container__rectangle__h1" />
          <span className="loading__container__rectangle__right loading__container__rectangle__h4" />
        </div>
      </div>

      <div className="loading__container__rectangle">
        <div>
          <span className="loading__container__rectangle__left loading__container__rectangle__h5" />
          <span className="loading__container__rectangle__right loading__container__rectangle__h2" />
        </div>
      </div>
    </div>
  );
}
