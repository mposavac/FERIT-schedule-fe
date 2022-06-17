import moment from "moment";
import { useTranslation, useErrorMsg } from "../context";

export const useValidation = (validationSchema: any) => {
  const { showMsg } = useErrorMsg();
  const { t } = useTranslation();

  const validate = <S>(values: S) =>
    new Promise((resolve, reject) => {
      let err;
      if (validationSchema?.schema_type === "auth") err = validateAuth(values);
      else if (validationSchema?.schema_type === "search")
        err = validateSearch(values);

      if (err) {
        showMsg(t(err));
        reject("Not Valid");
      }
      resolve("Valid");
    });

  const validateAuth = <S>(values: S): string => {
    const email = (values as any)?.email;
    const password = (values as any)?.password;
    const username = (values as any)?.username;
    if (!email && !password && !username) return "err.required.allFields";

    let keys = Object.keys(values);
    for (const key of keys) {
      const regex = new RegExp(validationSchema?.[key]?.pattern?.regex, "g");
      const value = (values as any)?.[key];
      if (validationSchema?.[key]?.isRequired && !value)
        return validationSchema?.[key]?.isRequired?.err;
      if (!regex.test(value)) return validationSchema?.[key]?.pattern?.err;
      if (validationSchema?.[key]?.isLength?.minLength > value.length)
        return validationSchema?.[key]?.isLength?.err;
    }
    return "";
  };

  const validateSearch = <S>(values: S): string => {
    let keys = Object.keys(values);
    for (const key of keys) {
      const value =
        (values as any)?.[key]?.value !== undefined
          ? (values as any)?.[key]?.value
          : (values as any)?.[key];
      if (validationSchema?.[key]?.isRequired && !value)
        return validationSchema?.[key]?.isRequired?.err;
      if (validationSchema?.[key]?.minValue?.min > parseInt(value))
        return validationSchema?.[key]?.minValue?.err;
      if (validationSchema?.[key]?.isTime) {
        const operator = validationSchema?.[key]?.isTime?.compareIfIs;
        const comapreToKey = validationSchema?.[key]?.isTime?.compareTo;
        const compareTo =
          (values as any)?.[comapreToKey]?.value !== undefined
            ? (values as any)?.[comapreToKey]?.value
            : (values as any)?.[comapreToKey];
        if (
          operator === "higher" &&
          moment(value, "HH:mm").isAfter(moment(compareTo, "HH:mm"))
        )
          return validationSchema?.[key]?.isTime?.err;
        if (
          operator === "lower" &&
          moment(value, "HH:mm").isBefore(moment(compareTo, "HH:mm"))
        )
          return validationSchema?.[key]?.isTime?.err;
      }
      if (validationSchema?.[key]?.isDate) {
        const operator = validationSchema?.[key]?.isDate?.compareIfIs;
        const comapreToKey = validationSchema?.[key]?.isDate?.compareTo;
        const compareTo =
          (values as any)?.[comapreToKey]?.value !== undefined
            ? (values as any)?.[comapreToKey]?.value
            : (values as any)?.[comapreToKey];
        if (!moment(value).isSame(moment(compareTo))) {
          if (operator === "higher" && moment(value).isAfter(moment(compareTo)))
            return validationSchema?.[key]?.isDate?.err;
          if (operator === "lower" && moment(value).isBefore(moment(compareTo)))
            return validationSchema?.[key]?.isDate?.err;
        }
      }
    }
    return "";
  };

  return [validate] as const;
};
