import React from "react";
import { useTranslation } from "../../../../context";
import { crossIcon } from "../../../../styles/assets/images";
import "./StaffInfoOverlay.scss";

export default function StaffInfoOverlay({
  selectedEmployee,
  toggleStaffInfo,
}: any) {
  const { t } = useTranslation();
  return (
    <div className="staff__info__overlay__container">
      <div className="staff__info__overlay__container__content">
        <div className="staff__info__overlay__container__content__close__container">
          <img src={crossIcon} alt="" onClick={toggleStaffInfo} />
        </div>
        <div>
          <p>
            {t("form.employee")}: {selectedEmployee?.ime},{" "}
            {selectedEmployee?.radnoMjesto}
          </p>
          <p>
            {t("e-mail")}: {selectedEmployee?.email}
          </p>
          <p>
            {t("form.staff.department")}: {selectedEmployee?.katedra}
          </p>
          <p>
            {t("form.staff.office")}: {selectedEmployee?.ured}
          </p>
        </div>
      </div>
    </div>
  );
}
