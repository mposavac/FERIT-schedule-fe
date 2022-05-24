import React, { useEffect, useState } from "react";
import { useLoading } from "../../../context";
import { useAxios } from "../../../hooks/useAxios";
import { useForm } from "../../../hooks/useForm";
import {
  CalendarEventsResponse,
  StaffOptionsResponse,
} from "../../../interfaces/responses.type";
import { searchSchema } from "../../../schemas";
import { InputSelectOption } from "../../shared/InputSelect/types";
import StaffPresenter from "../StaffPresenter/StaffPresenter";
import { StaffForm } from "../../../interfaces/forms.type";

export default function StaffContainer() {
  const today = new Date().toISOString();
  const [values, handleChange, validateForm] = useForm<StaffForm>(
    {
      date: today.substring(0, today.indexOf("T")),
      employee: { value: "", text: "" },
    },
    searchSchema
  );
  const { showLoader, hideLoader } = useLoading();
  const [fetchedOptions] = useAxios<StaffOptionsResponse[]>(
    "/staff/list",
    true
  );
  const [data, fetchData] = useAxios<CalendarEventsResponse>(
    `/staff/availability/${values.date}/${values.employee.value}`
  );
  const [staffOptions, setStaffsOptions] = useState<InputSelectOption[]>([]);
  const [selectedEmployee, setSelectedEmployee] =
    useState<StaffOptionsResponse>();
  const [isStaffInfoOpen, setIsStaffInfoOpen] = useState<boolean>(false);

  const handleFormChange = (e: any) => {
    if (e["employee"]) {
      const name = Object.keys(e)[0];
      handleChange({ target: { name: name, value: e[name] } });
      const employeeInfo = fetchedOptions?.filter(
        (staff: any) => staff.id === e["employee"].value
      )[0];
      setSelectedEmployee(employeeInfo);
    } else handleChange(e);
  };

  const handleSearch = () => {
    showLoader();
    validateForm()
      .then(() =>
        fetchData().then(() => {
          hideLoader();
        })
      )
      .catch(() => hideLoader());
  };

  const handleStaffInfoOverlay = () => {
    setIsStaffInfoOpen(!isStaffInfoOpen);
  };

  useEffect(() => {
    if (fetchedOptions) {
      const staffOptions = fetchedOptions.map((staff: any) => {
        return { text: staff.ime, value: staff.id };
      });
      setStaffsOptions(staffOptions);
    }
  }, [fetchedOptions]);

  return (
    <StaffPresenter
      values={values}
      calendarEvents={data}
      handleFormChange={handleFormChange}
      toggleStaffInfo={handleStaffInfoOverlay}
      handleSearch={handleSearch}
      staffOptions={staffOptions}
      selectedEmployee={selectedEmployee}
      isStaffInfoOpen={isStaffInfoOpen}
    />
  );
}
