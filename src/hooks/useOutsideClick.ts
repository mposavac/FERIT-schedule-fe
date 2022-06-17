import { useEffect, useRef } from "react";

export const useOutsideClick = (cb: () => void) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (ref?.current && !ref?.current?.contains(event.target)) cb();
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [ref, cb]);

  return ref;
};
