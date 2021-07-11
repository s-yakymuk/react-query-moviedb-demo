import { useEffect, useRef } from "react";

const useRefValue = <T>(value: T) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
};

export default useRefValue;
